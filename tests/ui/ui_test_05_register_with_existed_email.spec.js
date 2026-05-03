import { test, expect } from "@playwright/test";
import { SignupPage } from "../../pages/SignupPage";

test("@ui Test Case 5 - Register User with Existing Email", async ({ page }) => {
  const signupPage = new SignupPage(page);

  // Step 2: Navigate to URL
  await page.goto(process.env.BASE_URL);

  // Step 4: Click Signup/Login
  await page.getByRole("link", { name: "Signup / Login" }).click();

  // Step 5: Verify 'New User Signup!' is visible
  await expect(signupPage.newUserSignupHeading).toBeVisible();
  // Step 6-7: Enter name and already registered email, then click signup
  await signupPage.registerNewUser(
    process.env.USER_NAME,
    process.env.TEST_EMAIL,
  );

  // Step 8: Verify error message
  await expect(page.getByText("Email Address already exist!")).toBeVisible();
});
