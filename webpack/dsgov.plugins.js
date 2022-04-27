const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AfterBuildPlugin = require('@fiverr/afterbuild-webpack-plugin')
const fs = require('fs')
const shell = require('shelljs')
const { IgnorePlugin } = require('webpack')
// const fsPromises = require('fsPromises')
// import * as fsPromises from 'fs/promises'

const paths = require('./paths')
const { exit } = require('process')
const { minify } = require('terser')

const options_min = {
  mangle: {
    toplevel: true,
  },
  nameCache: {},
}

/**
 * Gera os plugins utilizados na build do DSGov.
 *
 * @param {'production' | 'development' | 'none'} mode Webpack mode
 */
function plugins(argv) {
  if (argv.mode === 'production') {
    return productionPlugins(argv)
  } else {
    return devPlugins(argv)
  }
}

function productionPlugins(argv) {
  const plugins = [
    // Extrai o css para ser minificado
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[id].min.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CssMinimizerPlugin({
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      },
      test: /\.min\.css$/g,
    }),
    new AfterBuildPlugin(minififyComponentsUTils),
    new IgnorePlugin({
      checkResource(resource) {
        // do something with resource

        return resource.includes('pug')
      },
    }),

    // {
    //   apply: (compiler) => {
    //     compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {})
    //   },
    // },
  ]

  if (shouldCleanOutputDir(argv)) {
    plugins.push(new CleanWebpackPlugin())
  }

  return plugins
}

function minififyComponentsUTils() {
  readUtilDirectory(paths.srcJSUtilbehavior, 'behavior')
  readDirectory(paths.srcComponents, 'components')
}

function devPlugins(argv) {
  // identifica se a build foi disparada pelo webpack-dev-server.
  // Caso não tenha sido, adicione ao index.html do servidor de desenvolvimento
  // um link para a página de análise de bundle, gerada pelo BundleAnalyzerPlugin
  // (que atualmente só funciona com build gerando os artefatos em arquivos no filesystem)
  const isDevServer = process.env.WEBPACK_DEV_SERVER === 'true'

  const plugins = [
    // Extrai o css que não vai ser minificado
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(paths.src, 'index.html'),
      favicon: path.resolve(paths.src, 'favicon.ico'),
      inject: false,
      isDevServer,
    }),

    // {
    //   apply: (compiler) => {
    //     compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
    //       exec(
    //         '<path to your post-build script here>',
    //         (err, stdout, stderr) => {
    //           if (stdout) process.stdout.write(stdout)
    //           if (stderr) process.stderr.write(stderr)
    //         }
    //       )
    //     })
    //   },
    // },
    new AfterBuildPlugin(minififyComponentsUTils),
  ]

  if (shouldCleanOutputDir(argv)) {
    plugins.push(new CleanWebpackPlugin())
  }

  // BundleAnalyzerPlugin só funciona com builds no filesystem. Ou seja, não é
  // compatível com a build em memória do webpack-dev-server.
  if (!isDevServer) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      })
    )
  }

  return plugins
}

function shouldCleanOutputDir(argv) {
  return !argv.env || argv.env.CLEAN !== 'false'
}

module.exports = {
  plugins,
}

function readDirectory(typeFolder, typeComponent) {
  jsonFile = path.resolve(typeFolder)

  fs.readdirSync(jsonFile).forEach((file) => {
    componentFile = path.resolve(typeFolder, file, `${file}.js`)

    componentDist = path.resolve(paths.dist, typeComponent, file)
    componentDistFile = path.resolve(
      paths.dist,
      typeComponent,
      file,
      `${file}.js`
    )
    componentDistFileMin = path.resolve(
      paths.dist,
      typeComponent,
      file,
      `${file}.min.js`
    )
    componentFileCss = path.resolve(componentDist, `${file}.min.min.css`)
    componentFileCssMap = path.resolve(componentDist, `${file}.min.min.css.map`)

    if (fs.existsSync(componentFileCss)) {
      fs.unlinkSync(componentFileCss)
    }

    if (fs.existsSync(componentFileCssMap)) {
      fs.unlinkSync(componentFileCssMap)
    }

    if (fs.existsSync(componentFile)) {
      if (fs.existsSync(componentDist)) {
        fs.copyFileSync(
          componentFile,
          componentDistFile,
          fs.constants.COPYFILE_FICLONE_FORC
        )
        createMinify(componentDistFile, componentDistFileMin)
      }
    } else {
      if (fs.existsSync(componentDistFile)) {
        fs.unlinkSync(componentDistFile)
        removeFile(`${file}.min.js`)
        removeFile(`${file}.min.js.map`)
        removeFile(`${file}.js.map`)
      }
    }
  })
}
/**
 * Remove arquivos js de utilitario da pasta dist que mão tem na pasta src
 * @param {*} typeFolder
 * @param {*} typeComponent
 */
function readUtilDirectory(typeFolder, typeComponent) {
  jsonFile = path.resolve(typeFolder)
  utilDistFile = path.resolve(paths.dist, 'partial', 'js', 'behavior')
  utilDistFileSrc = path.resolve(paths.src, 'partial', 'js', 'behavior')

  fs.readdirSync(utilDistFileSrc).forEach((file) => {
    componentFile = path.resolve(utilDistFile, `${file}`)

    const splitFilename = file.split('.')
    componentDist = path.resolve(paths.dist, 'partial', 'js', 'behavior', file)
    componentDistFile = path.resolve(paths.dist, 'partial', 'js', 'behavior')
    componentSrcFile = path.resolve(
      paths.src,
      'partial',
      'js',
      'behavior',
      `${file}`
    )

    componentDistFileMin = path.resolve(
      paths.dist,
      'partial',
      'js',
      'behavior',
      `${splitFilename[0]}.min.js`
    )

    fs.copyFile(
      componentSrcFile,
      componentDist,
      fs.constants.COPYFILE_FICLONE_FORC,
      (err) => {
        if (err) {
          return ''
        }
        return ''
      }
    )
    createMinify(componentSrcFile, componentDistFileMin)
  })
}

function removeFile(nameFile) {
  if (fs.existsSync(path.resolve(componentDist, nameFile))) {
    fs.unlinkSync(path.resolve(componentDist, nameFile))
  }
}

function createBehaviorFolder(name) {
  fs.mkdir(path.resolve(paths.dist, 'js', 'behavior', name), (err) => {
    return ''
  })
}
/**
 * minifica js
 * @param {*} componentDistFile  Origem
 * @param {*} componentDistFileMin DEstino do arquivo js
 */
function createMinify(componentDistFile, componentDistFileMin) {
  jsminfile = minify(fs.readFileSync(componentDistFile, 'utf8'), options_min)
  if (typeof jsminfile.code !== 'undefined') {
    fs.writeFileSync(componentDistFileMin, jsminfile.code, 'utf8')
  }
}
