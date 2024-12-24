import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
    },
  },
  edgeWebSecurity: false,
  pageLoadTimeout: 6000,
  failOnStatusCode: false,
});