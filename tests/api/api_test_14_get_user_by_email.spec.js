import { test, expect } from "@playwright/test";

test("GET /getUserDetailByEmail - valid email", async ({ request }) => {
  const response = await request.get(
    `${process.env.BASE_URL}/api/getUserDetailByEmail`,
    {
      params: { email: process.env.TEST_EMAIL },
    },
  );

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("User Detail:", body);

  // control expected fields
  expect(body).toHaveProperty("user");
  expect(body.user).toHaveProperty("email", process.env.TEST_EMAIL);
});
