import { defineConfig, devices } from "@playwright/experimental-ct-vue";

export default defineConfig({
  testDir: "./",
  snapshotDir: "./__snapshots__",
  timeout: 10 * 1000,
  fullyParallel: true,

  /* CI Specific Settings */

  /* Fail the build on CI if any test.only flags exist. */
  forbidOnly: !!process.env.CI,

  /* Retries happen only in a CI context */
  retries: process.env.CI ? 2 : 0,

  /* CI tests are not running parallel. */
  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  /* Shared settings for all projects. */
  use: {
    trace: "on-first-retry",
    ctPort: 3100,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
