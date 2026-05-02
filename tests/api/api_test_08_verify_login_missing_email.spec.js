import { test, expect } from "@playwright/test";

test("API - POST verifyLogin without email", async ({ request }) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/verifyLogin`,

    {
      form: {
        password: process.env.APITEST_PASSWORD,
      },
    },
  );

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Body:", body);
  expect(body.responseCode).toBe(400);
  expect(body.message).toBe("Bad request, email or password parameter is missing in POST request.");
});