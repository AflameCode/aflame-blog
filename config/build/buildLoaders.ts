import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.(css|scss|sass)$/i,
    use: [
      isDev
        ? "style-loader"
        : {
            loader: MiniCssExtractPlugin.loader,
          },
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[local]__[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
};
