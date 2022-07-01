const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const { config } = require("dotenv");
const CopyPlugin = require("copy-webpack-plugin");

const ROOT_FOLDER = path.resolve(__dirname, "..");

module.exports = {
  entry: path.resolve(ROOT_FOLDER, "src", "index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: {
      fs: false,
      os: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader?url=false" },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    path: path.resolve(ROOT_FOLDER, "dist"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(ROOT_FOLDER, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(ROOT_FOLDER, "public"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(
        config({ path: path.resolve(ROOT_FOLDER, ".env") }).parsed
      ),
    }),
  ],
  stats: "errors-only",
};
