// Importa o mixin
import breadcrumb from './breadcrumb.pug'

/**
 * Usa o mixin PUG do componente para gerar o HTML final
 * @param {*} args propriedades que serão enviadas para o PUG
 * @returns {HTMLElement} HTML do componente com os parâmetros preenchidos
 */
const createBreadcrumb = (props) => {
  return breadcrumb({ props })
}
// https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Componentes/Breadcrumb',
  // https://storybook.js.org/docs/react/essentials/controls
  argTypes: {
    crumbs: {
      name: 'Crumbs',
      control: 'object',
      description: 'Objeto que com a lista dos níveis do Breadcrumb',
      table: {
        type: {
          summary: 'array[object]',
          detail: `[{label[STRING]: "Label para o crumb", href[STRING]: "Endereço usado no href do crumb" }]

            Ex: [{label: 'Crumb 1', href: '/pagina1'}, {label: 'Crumb 2', href: '/pagina2',}]
            `,
        },
        defaultValue: {
          summary: '',
        },
      },
    },
  },
}

const Template = (args) => {
  return createBreadcrumb(args)
}

// https://storybook.js.org/docs/html/writing-stories/args
export const DEFAULT = Template.bind()
DEFAULT.storyName = 'Padrão'
DEFAULT.args = {
  label: 'Breadcrumb',
  crumbs: [
    {
      label: 'Crumb 1',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 2',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 3',
      href: 'javascript:void(0)',
    },
  ],
}

export const TRUNCATED = Template.bind()
TRUNCATED.storyName = 'Com truncamento'
TRUNCATED.args = {
  label: 'Breadcrumb',
  crumbs: [
    {
      label: 'Crumb 1',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 2',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 3',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 4',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 5',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 6',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 7',
      href: 'javascript:void(0)',
    },
    {
      label: 'Crumb 8',
      href: 'javascript:void(0)',
    },
  ],
}
