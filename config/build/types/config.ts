export type BuildMode = "development" | "production";
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
export interface BuildPath {
  entry: string;
  html: string;
  favicon: string;
  build: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  port: number;
  isDev: boolean;
}
