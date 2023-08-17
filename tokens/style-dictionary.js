const StyleDictionary = require('style-dictionary')
const Parser = require('expr-eval').Parser

/**
 * Configura tokens core.
 */
const core = {
  source: ['tokens/*.json', 'tokens/themes/light.json'],
  platforms: {
    // Configuração para tokens no formato CSS
    css: {
      transformGroup: 'ds/transforms',
      buildPath: 'dist/tokens/',
      files: [
        {
          destination: 'tokens.css',
          filter: 'filterTokens',
          format: 'css/variables',
        },
      ],
    },
    // Configuração para tokens no formato SASS
    scss: {
      transformGroup: 'ds/transforms',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: '_tokens.scss',
          filter: 'filterTokens',
          format: 'scss/variables',
          options: {
            themeable: true,
          },
        },
      ],
    },
  },
}

/**
 * Configura tokens de temas.
 */
function themesConfig(theme) {
  return {
    source: ['tokens/*.json', `tokens/themes/${theme}.json`],
    platforms: {
      css: {
        transformGroup: 'ds/transforms',
        buildPath: 'dist/tokens/themes/',
        files: [
          {
            destination: `${theme}.css`,
            filter: 'themeTokens',
            format: 'css/variables',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      scss: {
        transformGroup: 'ds/transforms',
        buildPath: 'src/tokens/themes/',
        files: [
          {
            destination: `_${theme}.scss`,
            filter: 'themeTokens',
            format: 'scss/variables',
            options: {
              outputReferences: true,
              themeable: true,
            },
          },
        ],
      },
    },
  }
}

/**
 * Transforma token de cor hex para rgba.
 */
StyleDictionary.registerTransform({
  name: 'transform/rgba',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.transform === 'rgba'
  },
  transformer: function (token) {
    const value = token.value

    const result = value.replace(/rgba\(([^)]+)\)/, function (match, group) {
      const [corHex, opacity] = group.split(', ')
      const [r, g, b] = corHex
        .match(/#(..)(..)(..)/)
        .slice(1)
        .map((x) => parseInt(x, 16))

      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    })

    return result
  },
})

/**
 * Transforma token para receber valor calculado da expressão matemática.
 */
StyleDictionary.registerTransform({
  name: 'transform/calc',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.transform === 'calc'
  },
  transformer: function (token) {
    const parser = new Parser()
    const expr = parser.parse(token.value)
    const result = expr.evaluate()
    let resultFormated = 0
    // Caso o resultado tenha casas decimais o valor é arredondado, exemplo: 3.1415 vira 3.14
    if (result % 1 !== 0) {
      // Verifica se tem casas decimais à direita e remove, exemplo: 0.200 vira 0.2
      if (result.toFixed(2).slice(-1) === '0') {
        resultFormated = result.toFixed(1)
      } else {
        resultFormated = result.toFixed(2)
      }
    } else {
      resultFormated = result
    }
    return resultFormated
  },
})

/**
 * Transforma token adicionando aspas.
 */
StyleDictionary.registerTransform({
  name: 'content/quote',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.type === 'fontFamilies' || token.type === 'fontFamilies'
  },
  transformer: function (token) {
    return `"${token.value}"`
  },
})

/**
 * Transforma token adicionando a unidade. Exemplo: px, %, em, etc.
 */
StyleDictionary.registerTransform({
  name: 'size/unit',
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.unit
  },
  transformer: function (token) {
    return `${token.value}${token.unit}`
  },
})

/**
 * Aproveita a lista de transforms para CSS e adiciona os novos.
 */
StyleDictionary.registerTransformGroup({
  name: 'ds/transforms',
  transforms: StyleDictionary.transformGroup['css'].concat([
    'transform/rgba',
    'transform/calc',
    'content/quote',
    'size/unit',
  ]),
})

/**
 * Filtro para retornar somente tokens de tema.
 */
StyleDictionary.registerFilter({
  name: 'themeTokens',
  matcher: function (token) {
    return token.attributes.category === 'theme'
  },
})

/**
 * Filtro para retornar somente tokens específicos.
 */
StyleDictionary.registerFilter({
  name: 'filterTokens',
  matcher: function (token) {
    return token.compile !== false
  },
})

/**
 * Gerar os tokens core.
 */
StyleDictionary.extend(core).buildAllPlatforms()

/**
 * Gerar os tokens de tema.
 */
;['light', 'dark', 'outubro-rosa'].map(function (theme) {
  StyleDictionary.extend(themesConfig(theme)).buildAllPlatforms()
})
