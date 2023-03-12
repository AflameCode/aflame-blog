import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";

  const port = env.port || 3300;
  const isDev = mode === "development";
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
    build: isDev
      ? path.resolve(__dirname, "build-dev")
      : path.resolve(__dirname, "build"),

    src: path.resolve(__dirname, "src"),
  };
  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
  });
  return config;
};
