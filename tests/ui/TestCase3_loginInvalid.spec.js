import { test,expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

test("Test Case 2 - Invalid Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Step 1-2: Launch browser and navigate
  await page.goto(process.env.BASE_URL);

  // Step 3-4: Verify home page and click Signup/Login
  await page.getByRole("link", { name: "Signup / Login" }).click();

  // Step 5: Verify login page visible
  expect(await loginPage.loginHeading.isVisible()).toBe(true) ;

  // Step 6-7: Enter incorrect credentials and click login
  await loginPage.login("wrong@example.com", "wrongpassword");

  // Step 8: Verify error message
  expect(await loginPage.errorMessage.isVisible()).toBe(true) ;
});
