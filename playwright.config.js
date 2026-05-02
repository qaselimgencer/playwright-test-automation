// @ts-check
const { devices } = require("@playwright/test");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, process.env.ENV_FILE || ".env.local"),
});

const config = {
  testDir: "./tests",
  retries: 1,
  workers: 5,
  /* Maximum time one test can run for. */
  //10-
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  projects: [
   /* {
      name: "safari",
      use: {
        browserName: "webkit",
        headless: true,
        screenshot: "off",
        trace: "on", //off,on
        ...devices["iPhone 11"],
      },
    },*/

    {
      name: "chrome",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "on",
        video: "retain-on-failure",
        ignoreHttpsErrors: true,
        permissions: ["geolocation"],

        trace: "on", //off,on
        // ...devices['']
        //   viewport : {width:720,height:720}
      },
    },
  ],
};

module.exports = config;