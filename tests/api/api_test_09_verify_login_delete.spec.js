import { test, expect } from "@playwright/test";
test("API - DELETE deleteLogin", async ({ request }) => {
  const response = await request.delete(
    `${process.env.BASE_URL}/api/verifyLogin`,
    {
      form: {},
    },
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Body:", body);
  expect(body.responseCode).toBe(405);
  expect(body.message).toBe("This request method is not supported.");
});
