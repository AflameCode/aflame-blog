import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

import webpack from "webpack";

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const { paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      inject: "body",
      favicon: paths.favicon,
    }),
    new webpack.ProgressPlugin(),
  ];
};
