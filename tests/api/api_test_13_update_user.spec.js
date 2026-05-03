import { test, expect } from "@playwright/test";
test("Create → Update → Delete Account", async ({ request }) => {
  const email = `user_${Date.now()}@gmail.com`;

  // Create
  await request.post(`${process.env.BASE_URL}/api/createAccount`, {
    form: {
      name: "Selim",
      email,
      password: "123456",
      title: "Mr",
      birth_date: "1",
      birth_month: "January",
      birth_year: "1990",
      firstname: "Selim",
      lastname: "Gençer",
      company: "DemoCo",
      address1: "Street 1",
      address2: "Suite 2",
      country: "Türkiye",
      zipcode: "35000",
      state: "Izmir",
      city: "Izmir",
      mobile_number: "5555555555",
    },
  });

  // Update
  const updateRes = await request.put(
    `${process.env.BASE_URL}/api/updateAccount`,
    {
      form: {
        name: "Selim Updated",
        email,
        password: "123456",
        title: "Mr",
        birth_date: "2",
        birth_month: "February",
        birth_year: "1991",
        firstname: "Selim",
        lastname: "Gençer",
        company: "UpdatedCo",
        address1: "Updated Street",
        address2: "Suite 10",
        country: "Türkiye",
        zipcode: "35100",
        state: "Izmir",
        city: "Izmir",
        mobile_number: "5551112233",
      },
    },
  );
  expect(updateRes.status()).toBe(200);
  const updateBody = await updateRes.json();
  expect(updateBody.message).toBe("User updated!");
  console.log("Update Response:", updateBody);

  // Delete
  const deleteRes = await request.delete(
    `${process.env.BASE_URL}/api/deleteAccount`,
    {
      form: { email, password: "123456" },
    },
  );
  expect(deleteRes.status()).toBe(200);
});
