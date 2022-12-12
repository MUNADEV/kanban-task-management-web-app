const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "hohj5y",
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    specPattern: "cypress/component/*.spec.{js,jsx,ts,tsx}",
  },

  e2e: {
    // e2e options here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    specPattern: "cypress/e2e/*.spec.{js,jsx,ts,tsx}",
    baseUrl: 'http://localhost:3000',
  }
});
