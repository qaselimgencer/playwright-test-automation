import { test, expect } from "@playwright/test";

test("API - POST verifyLogin with valid details", async ({ request }) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/verifyLogin`,
    {
      form: {
        email: process.env.APITEST_EMAIL,
        password: process.env.APITEST_PASSWORD,
      },
    },
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log("Body:", body);

  expect(body.responseCode).toBe(200);
  expect(body.message).toBe("User exists!");
});
