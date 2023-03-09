import { Configuration } from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve(),
    devtool: "inline-source-map",
  };
};
