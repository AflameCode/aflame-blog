export interface BuildPath {
  entry: string;
  html: string;
  favicon: string;
  build: string;
}

export interface BuildOptions {
  mode: "development" | "production";
  paths: BuildPath;
  port: number;
  isDev: boolean;
}
