const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const buildOptions = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  html: path.resolve(__dirname, "public", "index.html"),
};

module.exports = {
  mode: buildOptions.mode,
  entry: buildOptions.entry,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: buildOptions.html,
      inject: "body",
    }),
  ],
};
