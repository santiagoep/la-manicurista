const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_FOLDER = path.resolve(__dirname, "src");

module.exports = {
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
      "@page": path.resolve(SRC_FOLDER, "page"),
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
      /* favicon: "./src/assets/static/brand/favicon.ico", */
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
  ],
};
