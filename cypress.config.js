const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'an2dyu',
  e2e: {
    watchForFileChanges: false,
   defaultCommandTimeout: 10000,
    baseUrl: "https://wealthlane-vendor.server247.info/login/",
    //baseUrl: "https://google.com",
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
