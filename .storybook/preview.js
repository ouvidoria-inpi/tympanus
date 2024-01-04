/** @type { import('@storybook/html').Preview } */

import { themes } from "@storybook/theming";
import "../src/core.scss";
import dsTheme from "./dsTheme";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      values: [
        { name: "Invertido", value: "#071D41" },
        { name: "Claro", value: "#fff" },
      ],
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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: "requiredFirst",
    },
    darkMode: {
      dark: { ...themes.dark, appBg: "#333", background: "#333" },
      light: { ...themes.normal, appBg: "#FFF" },
      current: "dark",
    },
    docs: {
      theme: dsTheme,
      toc: true,
      // canvas: { sourceState: 'none' },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        removeComments: /^\s*remove me\s*$/,
        removeEmptyComments: true,
        htmlWhitespaceSensitivity: "css",
      },
    },
  },
};
export default preview;
