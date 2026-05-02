import { test, expect } from "@playwright/test";

test("API - POST to products list returns 405", async ({ request }) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/productsList`,
    {
      data: {},
    },
  );

  // Http status always 200, but response body contains actual status and message
  expect(response.status()).toBe(200);

  // Body check
  const body = await response.json();
  console.log("Running with user:", process.env.USER_NAME);
  console.log("Body:", body);

  // actual response code and message kontrolü
  expect(body.responseCode).toBe(405);
  expect(body.message).toBe("This request method is not supported.");
});
