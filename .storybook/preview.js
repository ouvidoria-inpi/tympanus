import '../src/core.scss'
import dsTheme from './dsTheme'

export const parameters = {
  docs: {
    theme: dsTheme,
  },
  backgrounds: {
    values: [
      { name: 'Claro', value: '#fff' },
      { name: 'Escuro', value: '#333' },
      { name: 'Invertido', value: '#071D41' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'alphabetical',
  },
  // previewTabs: {
  //   canvas: {
  //     title: 'Preview do componente',
  //   },
  //   'storybook/docs/panel': {
  //     hidden: true,
  //   },
  // },
  html: {
    removeEmptyComments: true,
    highlighter: {
      showLineNumbers: true,
    },
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
}

export const decorators = [
  (story) => {
    // REFACTOR: Conseguimos fazer o init direto aqui sem necessidade de importar o core-init.js?
    return `
      ${story()}
      <script src="./core.min.js"></script>
      <script src="./core-init.min.js"></script>
      `
  },
]
