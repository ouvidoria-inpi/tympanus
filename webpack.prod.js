const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')
const paths = {
  src: path.resolve(__dirname, 'src'),
  assets: path.resolve(__dirname, 'src', 'assets'),
  dist: path.resolve(__dirname, 'dist'),
}

module.exports = {
  mode: 'production',
  entry: {
    dsgov: [path.resolve(`${paths.src}/scss/dsgov.scss`), path.resolve(`${paths.src}/js/index.js`)],
  },
  watch: true,
  output: {
    filename: './js/dsgov.js',
    path: paths.dist,
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
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['pug -q -w -s ./src/pug/views/ -O optionpug.json -o ./dist/ -P'],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  devtool: 'source-map',
}
