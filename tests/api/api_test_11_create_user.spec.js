import { test, expect, request } from "@playwright/test";

test("POST /createAccount - valid details", async ({}) => {
  const apiContext = await request.newContext();

  const response = await apiContext.post(
    `${process.env.BASE_URL}/api/createAccount`,
    {
      form: {
        name: "Riza",
        email: `user_${Date.now()}@gmail.com`,
        password: "123456",
        title: "Mr",
        birth_date: "8",
        birth_month: "April",
        birth_year: "1990",
        firstname: "Riza",
        lastname: "Gencalp",
        company: "Uplift ERP",
        address1: "Test Street 123",
        address2: "Suite 4",
        country: "Canada",
        zipcode: "12345",
        state: "Ontario",
        city: "Toronto",
        mobile_number: "1234567890",
      },
    },
  );

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain(
    "text/html; charset=utf-8",
  );

  const body = await response.json();
  expect(body.message).toBe("User created!");
  expect(body.responseCode).toBe(201);
  console.log("Response Body:", body);
});
