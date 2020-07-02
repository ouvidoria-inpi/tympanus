const path = require('path')
// const isDEV = process.env.NODE_ENV === 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// const fs = require('fs')
const paths = {
  src: path.resolve(__dirname, 'src'),
  assets: path.resolve(__dirname, 'src', 'assets'),
  dist: path.resolve(__dirname, 'dist'),
}

// Our function that generates our html plugins
// function generateHtmlPlugins(templateDir, dirName) {
//   // Read files in template directory
//   const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
//   return templateFiles.map((item) => {
//     // Split names and extension
//     const parts = item.split('.')
//     const name = parts[0]
//     const extension = parts[1]
//     // Create new HTMLWebpackPlugin with options
//     return new HTMLWebpackPlugin({
//       filename: `${dirName}/${name}.html`,
//       template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
//       templateParameters: {
//         version: JSON.stringify(require('./package.json').version).replace(/\"/gi, ''),
//         cdnUrl: require('./package.json').cdn,
//       },
//       inject: true,
//     })
//   })
// }

// Call our function on our views directory.
// const htmlPluginsComponentes = generateHtmlPlugins('./src/pug/views/components', 'components')
// const htmlPluginsTemplates = generateHtmlPlugins('./src/pug/views/templates', 'templates')

module.exports = {
  mode: 'production',
  entry: {
    dsgov: path.resolve(`${paths.src}/js/index.js`),
    'dsgov.min': path.resolve(`${paths.src}/js/index.js`),
  },
  watch: false,
  output: {
    path: paths.dist,
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: ['node_modules'],
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'components/*',
          to: 'js',
          force: true,
          context: path.resolve(__dirname, 'src', 'js'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
      chunkFilename: '[id].min.css',
      ignoreOrder: false,
    }),
    new WebpackShellPlugin({
      onBuildEnd: ['pug -q -w -s ./src/pug/views/ -O optionpug.json -o ./dist/ -P'],
    }),
  ],
  // .concat(htmlPluginsComponentes, htmlPluginsTemplates),
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },
  devtool: 'source-map',
}
