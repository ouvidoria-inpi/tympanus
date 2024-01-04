import { withActions } from "@storybook/addon-actions/decorator";
import button from "./Button.pug";

export default {
  title: "Componentes/Button",
  parameters: {
    layout: "centered",
    actions: {
      handles: ["mouseover", "click"],
    },
  },
  decorators: [withActions],
  tags: ["autodocs"],
  argTypes: {
    content: {
      name: "Conteúdo",
      control: "text",
      type: { required: true },
    },
    emphasis: {
      name: "Ênfase",
      control: { type: "radio" },
      options: ["Primária", "Secundária", "Terciária"],
      mapping: {
        Primária: "primary",
        Secundária: "secondary",
        Terciária: null,
      },
      table: {
        defaultValue: { summary: "Terciária" },
      },
    },
    isDarkMode: {
      name: "Dark Mode",
      control: "boolean",
      table: { defaultValue: { summary: false }, category: "Comportamentos" },
      mapping: {
        true: "dark-mode",
        false: null,
      },
    },
    isCircle: {
      name: "Circular",
      control: "boolean",
      table: { defaultValue: { summary: false }, category: "Tipos" },
      mapping: {
        true: "circle",
        false: null,
      },
      if: { arg: "isBlock", truthy: false },
    },
    isBlock: {
      name: "Bloco",
      control: "boolean",
      table: { defaultValue: { summary: false }, category: "Comportamentos" },
      mapping: {
        true: "block",
        false: null,
      },
      if: { arg: "isCircle", truthy: false },
    },
    density: {
      name: "Densidade",
      control: "inline-radio",
      options: ["Alta", "Média", "Baixa"],
      mapping: {
        Alta: "small",
        Média: null,
        Baixa: "large",
      },
      table: { defaultValue: { summary: "Média" } },
    },
    state: {
      name: "Estado",
      control: { type: "select" },
      options: ["Nenhum", "Desativado", "Ativado", "Loading"],
      mapping: {
        Nenhum: null,
        Desativado: "disabled",
        Ativado: "active",
        Loading: "loading",
      },
      table: { defaultValue: { summary: "Nenhum" } },
    },
    onclick: {
      control: {
        type: null,
      },
      action: "onclick",
      description: "Evento de clique",
      table: {
        category: "Eventos",
        type: {
          summary: "summary",
        },
      },
    },
  },
};

export const Template = (props) => {
  return button({ props });
};

export const Primary = Template.bind();
Primary.storyName = "Ênfase primária";
Primary.args = {
  emphasis: "Primária",
  content: "Ênfase primária",
  density: "Média",
  isDarkMode: false,
  isCircle: false,
  isBlock: false,
  state: "Nenhum",
};

export const Secondary = (args) => Template(args);
Secondary.storyName = "Ênfase Secundária";
Secondary.args = {
  ...Primary.args,
  emphasis: "Secundária",
  content: "Ênfase secundária",
};

export const Tertiary = (args) => Template(args);
Tertiary.storyName = "Ênfase Terciária";
Tertiary.args = {
  ...Primary.args,
  emphasis: "Terciária",
  content: "Ênfase Terciária",
};

export const Circle = (args) => Template(args);
Circle.storyName = "Tipo Circular";
Circle.args = {
  ...Primary.args,
  content: '<i class="fas fa-city" aria-hidden="true"></i>',
  emphasis: "Primária",
  isCircle: true,
};

export const Block = (args) => Template(args);
Block.storyName = "Tipo Bloco";
Block.args = {
  ...Primary.args,
  content: "Botão Bloco",
  isBlock: true,
};

export const DensitySmall = (args) => Template(args);
DensitySmall.storyName = "Densidade Alta";
DensitySmall.args = {
  ...Primary.args,
  content: "Densidade Alta ",
  density: "small",
};

export const DensityMedium = (args) => Template(args);
DensityMedium.storyName = "Densidade Média";
DensityMedium.args = {
  ...Primary.args,
  content: "Densidade Média ",
  density: "medium",
};

export const DensityLarge = (args) => Template(args);
DensityLarge.storyName = "Densidade Baixa";
DensityLarge.args = {
  ...Primary.args,
  content: "Densidade Baixa ",
  density: "large",
};

export const StateDisabled = (args) => Template(args);
StateDisabled.storyName = "Desativado";
StateDisabled.args = {
  ...Primary.args,
  content: "Desativado ",
  state: "Desativado",
};

export const StateActive = (args) => Template(args);
StateActive.storyName = "Ativo";
StateActive.args = {
  ...Primary.args,
  content: "Ativado",
  state: "Ativado",
};

export const StateLoading = (args) => Template(args);
StateLoading.storyName = "Progresso";
StateLoading.args = {
  ...Primary.args,
  content: "Progresso",
  state: "Loading",
};
