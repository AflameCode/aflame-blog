import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (buildOptions: BuildOptions): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    preferAbsolute: true,
    modules: [buildOptions.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
};
