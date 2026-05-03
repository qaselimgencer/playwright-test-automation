import { test, expect } from "@playwright/test";

test("API - get products list", async ({ request }) => {
  const response = await request.get(`${process.env.BASE_URL}/api/productsList`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log("Running with user:", process.env.USER_NAME);

  expect(body).toHaveProperty("products");
  expect(Array.isArray(body.products)).toBeTruthy();
});
