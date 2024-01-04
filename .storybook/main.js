/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const path = require("path");
import remarkGfm from "remark-gfm";

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-interactions",
    "@xfinx/storybook-addon-html",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-a11y",
    "@geometricpanda/storybook-addon-badges",
    {
      name: "storypug",
      options: {
        babel: true,
        loaderOptions: {
          root: "src/components",
        },
      },
    },
  ],
  staticDirs: ["../src"],
  framework: {
    name: "@storybook/html-webpack5",
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
  docs: {
    autodocs: "tag",
    defaultName: "Exemplos",
  },
};
export default config;
