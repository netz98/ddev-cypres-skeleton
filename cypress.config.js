const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseURL: "https://ddev-belvini-cypress-web.ddev.site",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
