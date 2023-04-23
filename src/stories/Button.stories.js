import { createButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Componentes/Button',
  render: ({ label, ...args }) => {
    return createButton({ label, ...args })
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Texto de dentro do botão',
    },
    onClick: {
      action: 'onClick',
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
      table: {
        defaultValue: { summary: 'Terciário' },
      },
    },
    darkMode: {
      name: 'Dark Mode',
      control: 'boolean',
      table: { defaultValue: { summary: false }, category: 'Modos' },
    },
    circular: {
      name: 'Circular',
      control: 'boolean',
      if: { arg: 'bloco', truthy: false },
      defaultValue: true,
      table: { defaultValue: { summary: false }, category: 'Modos' },
    },
    bloco: {
      name: 'Bloco',
      control: 'boolean',
      if: { arg: 'circular', truthy: false },
      table: { defaultValue: { summary: false }, category: 'Modos' },
    },
    densidade: {
      name: 'Densidade',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
      table: { defaultValue: { summary: 'medium' } },
    },
    estado: {
      name: 'Estado',
      control: { type: 'select' },
      options: ['disabled', 'active', 'loading'],
    },
  },
}

const DEFAULT_OPTIONS = {
  label: '',
  enfase: 'Primário',
  darkMode: false,
  circular: false,
  bloco: false,
  densidade: 'medium',
  estado: '',
}

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const PRIMARY = {
  name: 'Primário',
  args: {
    ...DEFAULT_OPTIONS,
    label: 'Botão Primário',
    enfase: 'Primário',
  },
}
export const SECONDARY = {
  name: 'Secundário',
  args: {
    ...DEFAULT_OPTIONS,
    label: 'Botão Secundário',
    enfase: 'Secundário',
  },
}
export const TERTIARY = {
  name: 'Terciário',
  args: {
    ...DEFAULT_OPTIONS,
    label: 'Botão Terciário',
    enfase: 'Terciário',
  },
}
