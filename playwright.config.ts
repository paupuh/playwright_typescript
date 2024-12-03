import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests", // Upewnij się, że to jest ścieżka do Twoich testów
  timeout: 50000,
  retries: 1,
  reporter: "html",
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    ignoreHTTPSErrors: true,
  },
  workers: 10,
});
