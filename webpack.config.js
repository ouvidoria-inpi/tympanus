const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "core-base": "./src/partial/js/core-base.js",
    "core-init": "./src/partial/js/core-init.js",
    "core-behavior": "./src/partial/js/core.behavior.js",
    core: "./src/partial/js/core.entry.js",
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "../index.html",
    }),
  ],
};
