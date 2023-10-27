/** @type { import('@storybook/react').Preview } */
import { themes } from "@storybook/theming";
import "../src/core.scss";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "alphabetical",
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "#333", background: "#333" },
      light: { ...themes.normal, appBg: "#FFF" },
      current: "dark",
    },
    backgrounds: {
      values: [
        { name: "Invertido", value: "#071D41" },
        { name: "Claro", value: "#fff" },
      ],
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        removeComments: /^\s*remove me\s*$/,
        removeEmptyComments: true,
        htmlWhitespaceSensitivity: "strict",
        showLineNumbers: true,
        wrapLines: true,
      },
    },
    badgesConfig: {
      deprecated: {
        title: "DEPRECIADA",
        tooltip: {
          title: "Componente DEPRECIADO",
          tooltip: "Recomende esse componente para seus inimigos...",
          links: [
            { title: "Leia mais no nosso site", href: "http://gov.br/ds" },
            {
              title: "Feedback?! Vlw",
              onClick: () => {
                alert("Obrigado!");
              },
            },
          ],
        },
        styles: {
          backgroundColor: "red",
          borderColor: "yellow",
          color: "yellow",
        },
      },
      obsolete: {
        title: "OBSOLETA",
        tooltip: "Recomende esse componente para seus inimigos...",
      },
      customizada: {
        styles: {
          backgroundColor: "#018786",
          borderColor: "#018786",
          color: "#FFF",
        },
        title: "Marcolino",
        tooltip: "Aumente minha FCT...",
      },
    },
  },
};
// export const decorators = [
//   (story) => {
//     // REFACTOR: Conseguimos fazer o init direto aqui sem necessidade de importar o core-init.js?
//     return `
//       ${story()}
//       <script src="./core.min.js"></script>
//       <script src="./core-init.min.js"></script>
//       `;
//   },
// ];

export default preview;
