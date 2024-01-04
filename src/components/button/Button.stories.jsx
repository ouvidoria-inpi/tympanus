import { action } from '@storybook/addon-actions'
import { Button } from './Button'

export default {
  title: 'Componentes/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    // componentSubtitle: 'Compasdasdasdonent',
    // status: 'released',
    // mdx: markdown,
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
    isRound: {
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
      if: { arg: 'isRound', truthy: false },
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
      control: null,
      description: 'Evento de clique',
      table: {
        category: 'Eventos',
        defaultValue: { summary: 'onclick="callback()"' },
        type: {
          summary: 'Event',
        },
      },
    },
  },
}

export const Primary = {
  name: 'Ênfase Primária',
  storyDescription: 'teste de subtitle',
  args: {
    emphasis: 'Primária',
    content: 'Ênfase primária',
    isDarkMode: false,
    isRound: false,
    isBlock: false,
    density: 'Média',
    state: 'Nenhum',
    onclick: action('Evento onclick'),
  },
}

export const Secondary = {
  name: 'Ênfase Secundária',
  args: {
    ...Primary.args,
    emphasis: 'Secundária',
    content: 'Ênfase secundária',
  },
}

export const Tertiary = {
  name: 'Ênfase Terciária',
  args: {
    ...Primary.args,
    emphasis: 'Terciária',
    content: 'Ênfase Terciária',
  },
}

export const Circle = {
  name: 'Tipo Circular',
  args: {
    ...Primary.args,
    content: '<i class="fas fa-city" aria-hidden="true"></i>',
    emphasis: 'Primária',
    isRound: true,
  },
}

export const Block = {
  name: 'Tipo Bloco',
  args: {
    ...Primary.args,
    content: 'Botão Bloco',
    isBlock: true,
  },
}

export const DensitySmall = {
  name: 'Densidade Alta',
  args: {
    ...Primary.args,
    content: 'Densidade Alta ',
    density: 'small',
  },
}

export const DensityMedium = {
  name: 'Densidade Média',
  args: {
    ...Primary.args,
    content: 'Densidade Média ',
    density: 'medium',
  },
}

export const DensityLarge = {
  name: 'Densidade Baixa',
  args: {
    ...Primary.args,
    content: 'Densidade Baixa ',
    density: 'large',
  },
}

export const StateDisabled = {
  name: 'Desativado',
  args: {
    ...Primary.args,
    content: 'Desativado ',
    state: 'Desativado',
  },
}

export const StateActive = {
  name: 'Ativo',
  args: {
    ...Primary.args,
    content: 'Ativado',
    state: 'Ativado',
  },
}

export const StateLoading = {
  name: 'Progresso',
  args: {
    ...Primary.args,
    content: 'Progresso',
    state: 'Loading',
  },
}
