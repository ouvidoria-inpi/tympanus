const path = require('path')
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: true,
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
    '@whitespace/storybook-addon-html',
    {
      // https://storybook.js.org/addons/storypug
      name: 'storypug',
      options: {
        babel: true, //use babel-loader
        loaderOptions: {
          root: 'src/components', // use src components as the pug root inclusion path
        },
      },
    },
  ],
  // Define as pastas que serão disponibilizadas na URL
  staticDirs: ['../dist'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    })
    return config
  },
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    modernInlineRender: true,
    buildStoriesJson: true,
    storyStoreV7: true,
    previewMdx2: true,
  },
}
