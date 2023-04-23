export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
    sort: 'requiredFirst',
  },
  previewTabs: {
    canvas: {
      title: 'Visualização do componente',
    },
  },
  // options: {
  //   storySort: {
  //     order: ['Introdução', 'Suporte e Feedback', 'Eventos Emitidos pelos Componentes', 'CHANGELOG', 'Components'],
  //   },
  //   enableShortcuts: false,
  // },
  html: {
    removeEmptyComments: true,
    removeComments: /^\s*remove me\s*$/,
    highlighter: {
      showLineNumbers: true,
      wrapLines: false,
    },
    transform: (code) => {
      return code.replace(/(?:_nghost|ng-reflect).*?="[\S\s]*?"/g, '')
    },
  },
}
