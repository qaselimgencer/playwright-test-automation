import { test, expect } from "@playwright/test";
test("API - POST verifyLogin with invalid details", async ({ request }) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/verifyLogin`,
    {
      form: {

        email: "invalid@example.com",
        password: "invalidpassword"
      }
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Body:", body);
  expect(body.responseCode).toBe(404);
  expect(body.message).toBe("User not found!");
});