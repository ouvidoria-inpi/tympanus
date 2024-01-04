const path = require('path')

// Webpack Stuff
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// GOVBR-DS Build Stuff
const paths = require('./webpack/paths')
const { plugins } = require('./webpack/core.plugins')
const { entries } = require('./webpack/core.entries')

// Configuração webpack
const webpackConfig = (_env, argv) => {
  return {
    target: 'web',
    externals: [
      // /@popperjs/,
    ],
    entry: entries(argv),
    output: {
      filename: '[name].js',
      path: paths.dist,
      library: 'core',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    resolve: {
      alias: {
        '@': paths.src,
      },
    },
    module: {
      rules: [
        {
          test: /(?<!core)((?<!min))\.s[ac]ss$/i,
          include: paths.src,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  // Prefer `dart-sass (sass)`
                  // implementation: require("sass"),
                  includePaths: [paths.srcComponents],
                  outputStyle: 'expanded',
                },
                additionalData:
                  '@use "sass:math";\n @import "../../partial/scss/base";\n ',
              },
            },
          ],
        },
        {
          test: /\.json$/,
          loader: 'file-loader',
          type: 'javascript/auto',
          options: {
            name: '[name].json',
            outputPath: (filename, absoluteSourceModuleFilePath, rootPath) => {
              const relativePath = path.relative(
                rootPath,
                absoluteSourceModuleFilePath
              )
              const outPath = relativePath.split(path.sep)
              outPath.shift() // src
              return outPath.join(path.sep)
            },
          },
        },
        {
          test: /(core)\.s[ac]ss$/i,
          include: paths.src,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [paths.srcSCSS, paths.srcComponents],
                  outputStyle: 'expanded',
                },
              },
            },
          ],
        },
      ],
    },
    plugins: plugins(argv),
    optimization: {
      concatenateModules: true,
      moduleIds: 'named',
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
          parallel: true,
          terserOptions: {
            module: true,
            mangle: true,
            output: {
              comments: false,
            },
            compress: {
              inline: 1,
              unused: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    devtool: 'source-map',
  }
}

module.exports = webpackConfig
