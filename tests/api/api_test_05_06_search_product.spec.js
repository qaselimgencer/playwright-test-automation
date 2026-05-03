import { test, expect } from "@playwright/test";

test("API - POST searchProduct with correct Content-Type", async ({
  request,
}) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/searchProduct`,
    {
      form: { search_product: "tshirt" }, // send as form-data
    },
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log("Body:", body);

  // Positive case: products list should exist
  expect(body).toHaveProperty("products");
  expect(Array.isArray(body.products)).toBeTruthy();
  expect(body.products.length).toBeGreaterThan(0);
});

test("API - POST searchProduct with wrong Content-Type", async ({
  request,
}) => {
  const response = await request.post(
    `${process.env.BASE_URL}/api/searchProduct`,
    {
      data: { search_product: "tshirt" }, // sent as JSON instead of form-data
      headers: { "Content-Type": "application/json" },
    },
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log("Body:", body);

  // Negative case: API returns error info
  expect(body.responseCode).toBe(400);
  expect(body.message).toBe(
    "Bad request, search_product parameter is missing in POST request.",
  );
});
