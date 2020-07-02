const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

// We need Nodes fs module to read directory contents
const fs = require('fs')

const paths = {
  src: path.resolve(__dirname, 'src'),
  assets: path.resolve(__dirname, 'src', 'assets'),
  dist: path.resolve(__dirname, 'dist'),
}

module.exports = {
  mode: 'development',
  entry: {
    dsgov: [
      path.resolve(`${paths.src}/scss/dsgov.scss`),
      path.resolve(`${paths.src}/js/index.js`),
    ],
  },
  watch: true,
  output: {
    filename: './js/dsgov.js',
    path: paths.dist,
  },
  devServer: {
    contentBase: path.join('./dist'),
    watchContentBase: true,
    stats: 'errors-only',
    clientLogLevel: 'error',
    port: 9000,
    open: false,
    overlay: true,
    inline: true,
    hot: true,
    progress: true,
    profile: true,
    liveReload: true,
    host: '0.0.0.0',
    compress: true,
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
              sourceMap: false,
              sassOptions: {
                includePaths: ['node_modules'],
                outputStyle: 'expanded',
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        include: [paths.fonts],
        loader: fileLoader,
      },
      {
        test: /\.(png|svg|jpg|jpg)$/,
        include: [paths.images],
        loader: fileLoader,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  plugins: [
    // Extract our css to a separate css file
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [
          'npx pug -q -w -s ./src/pug/views/ -O optionpug.json -o ./dist/ -P',
          'node componentes.js',
        ],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  devtool: 'source-map',
}
