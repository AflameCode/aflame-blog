import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { buildPlugins } from "./config/build/buildPlugins/buildPlugins";
import { buildRules } from "./config/build/buildRules/buildRules";

export default () => {
  const options = {
    mode: "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.ts"),
      html: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      build: path.resolve(__dirname, "build"),
    },
  };
  const config: webpack.Configuration = {
    mode: "development",
    entry: options.paths.entry,
    output: {
      path: options.paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildRules(),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    devtool: "inline-source-map",
  };
  return config;
};
