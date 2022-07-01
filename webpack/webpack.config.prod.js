const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { default: merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    sideEffects: false,
  },
});
