const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_FOLDER = path.resolve(__dirname, "src");

module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@__mocks__": path.resolve(SRC_FOLDER, "__mocks__"),
        "@__tests__": path.resolve(SRC_FOLDER, "__tests__"),
        "@assets": path.resolve(SRC_FOLDER, "assets"),
        "@components": path.resolve(SRC_FOLDER, "components"),
        "@containers": path.resolve(SRC_FOLDER, "containers"),
        "@pages": path.resolve(SRC_FOLDER, "pages"),
        "@routes": path.resolve(SRC_FOLDER, "routes"),
        "@utils": path.resolve(SRC_FOLDER, "utils"),
        "@config": path.resolve(SRC_FOLDER, "config"),
        "@reducers": path.resolve(SRC_FOLDER, "reducers"),
        "@hoc": path.resolve(SRC_FOLDER, "hoc"),
        "@hooks": path.resolve(SRC_FOLDER, "hooks"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
          ],
        },
        {
          test: /\.(png|gif|jpg|svg|jpeg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "assets/[hash].[ext]",
              },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "assets/[name].css",
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
