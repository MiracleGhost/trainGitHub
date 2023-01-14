const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false
});
