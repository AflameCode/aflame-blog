import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export const buildDevServer = (
  buildOptions: BuildOptions
): DevServerConfiguration => {
  const { port } = buildOptions;
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
};
