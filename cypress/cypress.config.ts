import { defineConfig } from "cypress";

export default defineConfig({
  // Cypress common config
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://www.example.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    setupNodeEvents(on, config) {
      return require("@reportportal/agent-js-cypress/lib/plugin")(on, config);
    }
  },

  // Report Portal config
  reporter: "@reportportal/agent-js-cypress",
  reporterOptions: {
    endpoint: "http://localhost:8080/api/v1",
    token: "00000000-0000-0000-0000-000000000000",
    launch: "Cypress",
    project: "default_personal",
    description: "Smoke test",
    attributes: [
      {
        key: "key",
        value: "value"
      },
      {
        value: "tag"
      }
    ]
  }
});
