/** @type { import('@storybook/react').Preview } */
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks'
import React from 'react'
import '../src/core.scss'
import dsTheme from './dsTheme'

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
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    docs: {
      theme: dsTheme,
      toc: true,
      // canvas: { sourceState: 'none' },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    html: {
      removeEmptyComments: true,
      prettier: {
        tabWidth: 4,
        useTabs: false,
        htmlWhitespaceSensitivity: 'css',
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
