/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming'
import '../src/core.scss'
import dsTheme from './dsTheme'
import renderToHTML from './renderToHTML'

const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Leia-me', 'Notas de versão', '*', 'Componentes'],
      },
    },
    previewTabs: {
      'storybook/docs/panel': {
        index: -1,
        title: 'Documentation',
      },
      canvas: { title: 'Code', hidden: false },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#333', background: '#333' },
      light: { ...themes.normal, appBg: '#FFF' },
      current: 'dark',
    },
    backgrounds: {
      values: [
        { name: 'Invertido', value: '#071D41' },
        { name: 'Claro', value: '#fff' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    docs: {
      theme: dsTheme,
      toc: true,
      transformSource: (src, storyContext) =>
        renderToHTML(storyContext.storyFn),
      // canvas: { sourceState: 'none' },
    },
    html: {
      removeEmptyComments: true,
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'css',
        removeComments: /^\s*remove me\s*$/,
        removeEmptyComments: true,
      },
    },
    badgesConfig: {
      deprecated: {
        title: 'DEPRECIADA',
        tooltip: {
          title: 'Componente DEPRECIADO',
          tooltip: 'Recomende esse componente para seus inimigos...',
          links: [
            { title: 'Leia mais no nosso site', href: 'http://gov.br/ds' },
            {
              title: 'Feedback?! Vlw',
              onClick: () => {
                alert('Obrigado!')
              },
            },
          ],
        },
        styles: {
          backgroundColor: 'red',
          borderColor: 'yellow',
          color: 'yellow',
        },
      },
      obsolete: {
        title: 'OBSOLETA',
        tooltip: 'Recomende esse componente para seus inimigos...',
      },
      customizada: {
        styles: {
          backgroundColor: '#018786',
          borderColor: '#018786',
          color: '#FFF',
        },
        title: 'Marcolino',
        tooltip: 'Aumente minha FCT...',
      },
    },
  },
}

// export const decorators = [
//   (story) => {
//     // REFACTOR: Conseguimos fazer o init direto aqui sem necessidade de importar o core-init.js?
//     return `
//       ${story()}
//       <script src="./core.min.js"></script>
//       <script src="./core-init.min.js"></script>
//       `
//   },
// ]

export default preview
