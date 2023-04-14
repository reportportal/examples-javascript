import {defineConfig} from 'cypress';

export default defineConfig({
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: 'https://www.example.com',
        specPattern: 'cypress/e2e/**/*.cy.ts',
    }
});
