import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (
  buildOptions: BuildOptions
): Configuration => {
  const { mode, paths, isDev } = buildOptions;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
      rules: buildLoaders(buildOptions),
    },
    resolve: buildResolvers(buildOptions),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(buildOptions) : undefined,
  };
};
