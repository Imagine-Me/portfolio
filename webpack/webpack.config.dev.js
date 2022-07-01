const path = require("path");
const { default: merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "..", "dist"),
    },
    open: true,
    historyApiFallback: true,
    devMiddleware: {
      index: "index.html",
    },
  },
});
