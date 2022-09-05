const path = require("path");

module.exports = () => {
  const appConfig = {
    mode: "production",
    entry: "./src/index.js",

    snapshot: {
      managedPaths: [
        /node_modules\/(?!(@azure\/msal-browser)\/).*/
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },

    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].[contenthash].bundle.js",
      publicPath: "/"
    },

    devtool: "cheap-module-source-map"
  };

  return [appConfig];
};
