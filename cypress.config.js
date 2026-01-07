const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  // Use path.resolve with __dirname to ensure the path is absolute
  const pathToConfigFile = path.resolve(__dirname, `${file}.env.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // 1. Determine which file to load (default to production if no flag passed)
      const file = config.env.configFile || 'production';

      // 2. Fetch the data from your JSON file
      const envData = await getConfigurationByFile(file);

      // 3. IMPORTANT: Put the data inside the config.env object
      // This allows Cypress.env() to find your variables
      config.env = {
        ...config.env,
        ...envData
      };

      // 4. Return the updated config object
      return config;
    },
  },
});