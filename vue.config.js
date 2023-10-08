const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.js",
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_BASEPATH
      : "auto",
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: "chunk-vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: "async",
            reuseExistingChunk: true,
          },
          common: {
            name: "chunk-common",
            minChunks: 2,
            priority: -20,
            chunks: "async",
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "calendar",
        filename: "assets/js/remoteEntry.js",
        exposes: {
          "./Calendar": "./src/views/CalendarView",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
});
