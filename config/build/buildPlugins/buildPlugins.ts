import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildOptions } from "../types/config";

import webpack from "webpack";
export const buildPlugins = (
  options: buildOptions
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      inject: "body",
      favicon: options.paths.favicon,
    }),
    new webpack.ProgressPlugin(),
  ];
};
