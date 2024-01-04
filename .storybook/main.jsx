/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path')

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@whitespace/storybook-addon-html',
  ],
  staticDirs: ['../dist'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Exemplos',
  },
  core: {
    disableTelemetry: true,
  },
  // core: {
  //   builder: 'webpack5',
  //   disableTelemetry: true,
  // },
  // features: {
  //   postcss: false,
  //   modernInlineRender: true,
  //   buildStoriesJson: true,
  //   storyStoreV7: true,
  //   previewMdx2: true,
  // },
}
export default config
