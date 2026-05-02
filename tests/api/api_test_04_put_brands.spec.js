import { test, expect } from "@playwright/test";

test("API - PUT to brand list returns 405", async ({ request }) => {
  const response = await request.put(`${process.env.BASE_URL}/api/brandsList`);

  // HHTP status always 200, but response body contains actual status and message
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log("Running with user:", process.env.USER_NAME);
  console.log("Body:", body);

  // actual response code and message control
  expect(body.responseCode).toBe(405);
  expect(body.message).toBe("This request method is not supported.");
});
