const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(`${file}.env.json`);

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Accept a "configFile" value or default to 'local'
      const file = config.env.configFile || 'local';

      return getConfigurationByFile(file);
    },
  },
});