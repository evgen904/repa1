const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_BASEPATH
      : "auto",
  chainWebpack: (config) => {
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "calendar",
          exposes: {
            "./Calendar": "./src/views/CalendarView",
          },
          shared: {
            vue: {
              eager: true,
              singleton: false,
            },
          },
          filename: "remoteEntry.js",
        },
      ]);
  },
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
  },
});
