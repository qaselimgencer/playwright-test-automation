// @ts-check
const { devices } = require("@playwright/test");
const path = require("path");

// Load environment variables from .env.local or the file specified in ENV_FILE
require("dotenv").config({
  path: path.resolve(__dirname, process.env.ENV_FILE || ".env.local"),
});

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests",

  /* Maximum time one test can run for (60 seconds) */
  timeout: 60 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * Increased to 10s for Jenkins stability.
     */
    timeout: 10000,
  },

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,

  /**
   * Opt out of parallel tests on CI to prevent system overload.
   * Jenkins (CI) will use 1 worker, local will use 5 workers.
   */
  workers: process.env.CI ? 1 : 5,

  /**
   * Reporter to use.
   * 'html' is for the visual report, 'list' is for Jenkins console visibility.
   * 'open: never' is CRITICAL for Jenkins.
   */
  reporter: [["html", { open: "never" }], ["list"]],

  /* Shared settings for all the projects below. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /**
     * Headless mode: TRUE for Jenkins (CI), FALSE for local debugging.
     * Jenkins servers usually don't have a monitor, so headless must be TRUE.
     */
    headless: true,

    /* Collect trace when retrying the failed test. */
    trace: "on",

    /* Capture screenshot only on failure to save disk space on Jenkins */
    screenshot: "only-on-failure",

    /* Record video only on failure */
    video: "retain-on-failure",

    ignoreHTTPSErrors: true,
    permissions: ["geolocation"],
  },

  projects: [
    {
      name: "chrome",
      use: {
        browserName: "chromium",
        channel: "chrome", // Uses the actual Chrome browser
      },
    },
    /* You can uncomment Safari if needed later
    {
      name: "safari",
      use: {
        browserName: "webkit",
        ...devices["iPhone 11"],
      },
    },
    */
  ],
};

module.exports = config;
