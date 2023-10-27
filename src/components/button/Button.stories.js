/**
 * Usa o mixin PUG do componente para gerar o HTML final
 * @param {*} props propriedades que serão enviadas para o PUG
 * @returns {HTMLElement} HTML do componente com os parâmetros preenchidos
 */
const createButton = (props) => {
  // O PUG usa a estrutura "block". Passando o parâmetro com nome "contents" por padrão é colocado nesse "block"
  const contents = props.label

  // Lógica para gerar as classes conforme o componente precisa
  const classesToAdd = []
  if (props.enfase) classesToAdd.push(props.enfase)
  if (props.darkMode) classesToAdd.push(props.darkMode)
  if (props.circular) classesToAdd.push(props.circular)
  if (props.bloco) classesToAdd.push(props.bloco)
  if (props.densidade) classesToAdd.push(props.densidade)
  if (props.estado) classesToAdd.push(props.estado)

  return `<button class="br-button ${classesToAdd.join(
    ' '
  )}" type="button">${contents}</button>`
  // return (<button class=`br-button ${classesToAdd.join()}` type="button">${contents}</button>)
}

// https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Componentes/Button',
  tags: ['autodocs'],
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Texto de dentro do botão',
    },
    onclick: {
      action: 'clicked',
      description: 'Evento de clique no botão',
      table: {
        category: 'Eventos',
      },
    },
    enfase: {
      name: 'Ênfase',
      type: { name: 'string', required: true },
      description: 'Texto de dentro do botão',
      control: { type: 'radio' },
      options: ['Primário', 'Secundário', 'Terciário'],
      mapping: {
        Primário: 'primary',
        Secundário: 'secondary',
        Terciário: null,
      },
      table: {
        defaultValue: { summary: 'Terciário' },
      },
    },
    darkMode: {
      name: 'Dark Mode',
      control: 'boolean',
      table: { defaultValue: { summary: false }, category: 'Modos' },
      mapping: {
        true: 'dark-mode',
        false: null,
      },
    },
    circular: {
      name: 'Circular',
      control: 'boolean',
      if: { arg: 'bloco', truthy: false },
      defaultValue: true,
      table: { defaultValue: { summary: false }, category: 'Modos' },
      mapping: {
        true: 'circle',
        false: null,
      },
    },
    bloco: {
      name: 'Bloco',
      control: 'boolean',
      if: { arg: 'circular', truthy: false },
      table: { defaultValue: { summary: false }, category: 'Modos' },
      mapping: {
        true: 'block',
        false: null,
      },
    },
    densidade: {
      name: 'Densidade',
      control: 'inline-radio',
      options: ['Alta', 'Padrão', 'Baixa'],
      mapping: {
        Alta: 'small',
        Padrão: 'medium',
        Baixa: 'large',
      },
      table: { defaultValue: { summary: 'Padrão' } },
    },
    estado: {
      name: 'Estado',
      control: { type: 'select' },
      options: ['Desativado', 'Ativado', 'Loading'],
      mapping: {
        Desativado: 'disabled',
        Ativado: 'active',
        Loading: 'loading',
      },
    },
  },
  parameters: {
    actions: {
      handles: ['click', 'mouseleave'],
    },
  },
}

const Template = (args) => {
  return createButton(args)
}

const DEFAULT_OPTIONS = {
  enfase: 'Primário',
  darkMode: false,
  circular: false,
  bloco: false,
  densidade: 'medium',
  estado: '',
}

// https://storybook.js.org/docs/html/writing-stories/args
export const PRIMARY = Template.bind()
PRIMARY.storyName = 'Primário'
PRIMARY.args = {
  ...DEFAULT_OPTIONS,
  label: 'Botão Primário',
  enfase: 'Primário',
  onClick: {
    action: 'clicked',
  },
}

export const SECONDARY = Template.bind()
SECONDARY.storyName = 'Secundário'
SECONDARY.args = {
  ...DEFAULT_OPTIONS,
  label: 'Botão Secundário',
  enfase: 'Secundário',
}

export const TERTIARY = Template.bind()
TERTIARY.storyName = 'Terciário (padrão)'
TERTIARY.args = {
  ...DEFAULT_OPTIONS,
  label: 'Botão Terciário',
  enfase: 'Terciário',
}
