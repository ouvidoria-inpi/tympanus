import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Componentes/Button",
  argTypes: {
    label: {
      name: "Label",
      control: "text",
      description: "Texto de dentro do botão",
    },
    onclick: {
      action: "clicked",
      description: "Evento de clique no botão",
      table: {
        category: "Eventos",
      },
    },
    enfase: {
      name: "Ênfase",
      type: { name: "string", required: true },
      description: "Texto de dentro do botão",
      control: { type: "radio" },
      options: ["Primário", "Secundário", "Terciário"],
      mapping: {
        Primário: "primary",
        Secundário: "secondary",
        Terciário: null,
      },
      table: {
        defaultValue: { summary: "Terciário" },
      },
    },
    darkMode: {
      name: "Dark Mode",
      control: "boolean",
      table: { defaultValue: { summary: false }, category: "Modos" },
      mapping: {
        true: "dark-mode",
        false: null,
      },
    },
    circular: {
      name: "Circular",
      control: "boolean",
      if: { arg: "bloco", truthy: false },
      defaultValue: true,
      table: { defaultValue: { summary: false }, category: "Modos" },
      mapping: {
        true: "circle",
        false: null,
      },
    },
    bloco: {
      name: "Bloco",
      control: "boolean",
      if: { arg: "circular", truthy: false },
      table: { defaultValue: { summary: false }, category: "Modos" },
      mapping: {
        true: "block",
        false: null,
      },
    },
    densidade: {
      name: "Densidade",
      control: "inline-radio",
      options: ["Alta", "Padrão", "Baixa"],
      mapping: {
        Alta: "small",
        Padrão: "medium",
        Baixa: "large",
      },
      table: { defaultValue: { summary: "Padrão" } },
    },
    estado: {
      name: "Estado",
      control: { type: "select" },
      options: ["Desativado", "Ativado", "Loading"],
      mapping: {
        Desativado: "disabled",
        Ativado: "active",
        Loading: "loading",
      },
    },
  },
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
    badges: [BADGE.DEPRECATED, BADGE.OBSOLETE, "customizada"],
  },
};

const buttonTemplate = (args) => {
  let classes = ["br-button"];

  if (args.enfase) {
    classes.push(args.enfase);
  }

  if (args.darkMode) classes.push(args.darkMode);
  if (args.circular) classes.push(args.circular);
  if (args.bloco) classes.push(args.bloco);
  if (args.densidade) classes.push(args.densidade);
  if (args.estado) classes.push(args.estado);

  return (
    <button id="button" className={classes.join(" ")} type="button">
      {args.label}
    </button>
  );
};

const DEFAULT_OPTIONS = {
  enfase: "Primário",
  darkMode: false,
  circular: false,
  bloco: false,
  densidade: "medium",
  estado: "",
};

export const Primary = buttonTemplate.bind({});
Primary.args = {
  darkMode: false,
  circular: false,
  bloco: false,
  densidade: "medium",
  estado: "",
  label: "Botão Primário",
  enfase: "Primário",
};

export const Secondary = buttonTemplate.bind({});
Secondary.args = {
  darkMode: false,
  circular: false,
  bloco: false,
  densidade: "medium",
  estado: "",
  label: "Botão Secundário",
  enfase: "Secundário",
};

const inputTemplate = (args) => {
  return (
    <>
      <div className="col-sm-5 col-lg-3 mb-3">
        <div className="br-input input-button">
          <label htmlFor="input-password">Senha</label>
          <input
            id="input-password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button
            className="br-button"
            type="button"
            aria-label="Mostrar senha"
          >
            <i className="fas fa-eye" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="col-sm-5 col-lg-3 mb-3">
        <div className="br-input small input-button">
          <label htmlFor="input-login-small">Logar</label>
          <input
            id="input-login-small"
            type="text"
            placeholder="Digite seu usuário"
          />
          <button
            className="br-button"
            type="button"
            aria-label="Botão de ação"
          >
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="col-sm-5 col-lg-3 mb-3">
        <div className="br-input large input-button">
          <label htmlFor="input-search-large">Buscar</label>
          <input
            id="input-search-large"
            type="search"
            placeholder="Digite uma palavra"
          />
          <button className="br-button" type="button" aria-label="Buscar">
            <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export const FillInputFields = inputTemplate.bind({});
FillInputFields.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  // Preencher o campo de senha
  await userEvent.type(
    canvas.getByPlaceholderText("Digite sua senha"),
    "senha123"
  );
  await userEvent.click(canvas.getByRole("button", { name: "Mostrar senha" }));

  // Preencher o campo de login
  await userEvent.type(
    canvas.getByPlaceholderText("Digite seu usuário"),
    "meuusuario"
  );
  await userEvent.click(canvas.getByRole("button", { name: "Botão de ação" }));

  // Preencher o campo de busca
  await userEvent.type(
    canvas.getByPlaceholderText("Digite uma palavra"),
    "palavrachave"
  );
  await userEvent.click(canvas.getByRole("button", { name: "Buscar" }));
};
