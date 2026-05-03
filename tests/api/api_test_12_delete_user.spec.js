import{ test, expect } from "@playwright/test"; 

test("Create then Delete Account lifecycle", async ({ request }) => {
  // Create account
  const createResponse = await request.post(
    `${process.env.BASE_URL}/api/createAccount`,
    {
      form: {
        name: "Lifecycle",
        email: `user_${Date.now()}@gmail.com`,
        password: "123456",
        title: "Mr",
        birth_date: "1",
        birth_month: "January",
        birth_year: "1990",
        firstname: "Life",
        lastname: "Cycle",
        company: "DemoCo",
        address1: "Street 1",
        country: "Türkiye",
        zipcode: "35000",
        state: "Izmir",
        city: "Izmir",
        mobile_number: "5555555555",
      },
    },
  );
  expect(createResponse.status()).toBe(200);

  const createBody = await createResponse.json();
  expect(createBody.message).toBe("User created!");

  // Delete account
  const deleteResponse = await request.delete(
    `${process.env.BASE_URL}/api/deleteAccount`,
    {
      form: {
        email: createBody.email ?? "fallback@test.com",
        password: "123456",
      },
    },
  );
  expect(deleteResponse.status()).toBe(200);
  const deleteBody = await deleteResponse.json();
  expect(deleteBody.message).toBe("Account not found!");
});
