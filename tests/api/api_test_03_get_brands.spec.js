import {test,expect} from "@playwright/test"; 

test("API - GET to brand list returns 200", async ({ request }) => {
  const response = await request.get(`${process.env.BASE_URL}/api/brandsList`);

  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log("Running with user:", process.env.USER_NAME);
  expect(body).toHaveProperty("brands");
  expect(Array.isArray(body.brands)).toBeTruthy();
});