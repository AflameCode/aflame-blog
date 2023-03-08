import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const buildOptions = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
};
const config: webpack.Configuration = {
  mode: "development",
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
      favicon: buildOptions.favicon,
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
};

export default config;
