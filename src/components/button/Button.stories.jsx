import { action } from '@storybook/addon-actions'
import { buttonTemplate } from './Button.js'

export default {
  title: 'Componentes/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      name: 'Conteúdo',
      control: 'text',
      html: true,
    },
    emphasis: {
      name: 'Ênfase',
      control: { type: 'radio' },
      options: ['Primária', 'Secundária', 'Terciária'],
      mapping: {
        Primária: 'primary',
        Secundária: 'secondary',
        Terciária: null,
      },
      table: {
        defaultValue: { summary: 'Terciária' },
      },
    },
    isDarkMode: {
      name: 'Dark Mode',
      control: 'boolean',
      table: { defaultValue: { summary: false }, category: 'Comportamentos' },
      mapping: {
        true: 'dark-mode',
        false: null,
      },
    },
    isCircle: {
      name: 'Circular',
      control: 'boolean',
      table: { defaultValue: { summary: false }, category: 'Tipos' },
      mapping: {
        true: 'circle',
        false: null,
      },
      if: { arg: 'isBlock', truthy: false },
    },
    isBlock: {
      name: 'Bloco',
      control: 'boolean',
      table: { defaultValue: { summary: false }, category: 'Comportamentos' },
      mapping: {
        true: 'block',
        false: null,
      },
      if: { arg: 'isCircle', truthy: false },
    },
    density: {
      name: 'Densidade',
      control: 'inline-radio',
      options: ['Alta', 'Média', 'Baixa'],
      mapping: {
        Alta: 'small',
        Média: null,
        Baixa: 'large',
      },
      table: { defaultValue: { summary: 'Média' } },
    },
    state: {
      name: 'Estado',
      control: { type: 'select' },
      options: ['Nenhum', 'Desativado', 'Ativado', 'Loading'],
      mapping: {
        Nenhum: null,
        Desativado: 'disabled',
        Ativado: 'active',
        Loading: 'loading',
      },
      table: { defaultValue: { summary: 'Nenhum' } },
    },
    onclick: {
      control: {
        type: null,
      },
      description: 'Evento de clique',
      table: {
        category: 'Eventos',
        type: {
          summary: 'summary',
        },
      },
    },
  },
}

export const Primary = buttonTemplate.bind({})
Primary.storyName = 'Ênfase primária'
Primary.args = {
  emphasis: 'Primária',
  content: 'Ênfase primária',
  isDarkMode: false,
  isCircle: false,
  isBlock: false,
  density: 'Média',
  state: 'Nenhum',
  onclick: action('Evento onclick'),
}

export const Secondary = buttonTemplate.bind({})
Secondary.storyName = 'Ênfase Secundária'
Secondary.args = {
  ...Primary.args,
  emphasis: 'Secundária',
  content: 'Ênfase secundária',
}

export const Tertiary = buttonTemplate.bind({})
Tertiary.storyName = 'Ênfase Terciária'
Tertiary.args = {
  ...Primary.args,
  emphasis: 'Terciária',
  content: 'Ênfase Terciária',
}

export const Circle = buttonTemplate.bind({})
Circle.storyName = 'Tipo Circular'
Circle.args = {
  ...Primary.args,
  content: '<i class="fas fa-city" aria-hidden="true"></i>',
  emphasis: 'Primária',
<<<<<<< Updated upstream
  isRound: true,
=======
  isCircle: true,
>>>>>>> Stashed changes
}

export const Block = buttonTemplate.bind({})
Block.storyName = 'Tipo Bloco'
Block.args = {
  ...Primary.args,
  content: 'Botão Bloco',
  isBlock: true,
}

export const DensitySmall = buttonTemplate.bind({})
DensitySmall.storyName = 'Densidade Alta'
DensitySmall.args = {
  ...Primary.args,
  content: 'Densidade Alta ',
  density: 'small',
}

export const DensityMedium = buttonTemplate.bind({})
DensityMedium.storyName = 'Densidade Média'
DensityMedium.args = {
  ...Primary.args,
  content: 'Densidade Média ',
  density: 'medium',
}

export const DensityLarge = buttonTemplate.bind({})
DensityLarge.storyName = 'Densidade Baixa'
DensityLarge.args = {
  ...Primary.args,
  content: 'Densidade Baixa ',
  density: 'large',
}

export const StateDisabled = buttonTemplate.bind({})
StateDisabled.storyName = 'Desativado'
StateDisabled.args = {
  ...Primary.args,
  content: 'Desativado ',
  state: 'Desativado',
}

export const StateActive = buttonTemplate.bind({})
StateActive.storyName = 'Ativo'
StateActive.args = {
  ...Primary.args,
  content: 'Ativado',
  state: 'Ativado',
}

export const StateLoading = buttonTemplate.bind({})
StateLoading.storyName = 'Progresso'
StateLoading.args = {
  ...Primary.args,
  content: 'Progresso',
  state: 'Loading',
}
