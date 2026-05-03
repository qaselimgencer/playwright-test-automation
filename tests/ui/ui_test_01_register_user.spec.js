import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { SignupPage } from "../../pages/SignupPage";
import { AccountInfoPage } from "../../pages/AccountInfoPage";
import { AddressPage } from "../../pages/AddressPage";
import { AccountPage } from "../../pages/AccountPage";

test("register and delete user with POM", async ({ page }) => {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);
  const accountInfoPage = new AccountInfoPage(page);
  const addressPage = new AddressPage(page);
  const accountPage = new AccountPage(page);

  await homePage.open();
  await homePage.goToSignup();

  await signupPage.newUserSignupHeading.waitFor({ state: "visible" });
  await expect(signupPage.newUserSignupHeading).toBeVisible();

  const randomEmail = `user_${Date.now()}@gmail.com`;
  await signupPage.registerNewUser(process.env.USER_NAME, randomEmail);

  await accountInfoPage.fillAccountInfo();
  await addressPage.fillAddress();

  // Create account
  await accountPage.createAccount();
  await expect(accountPage.accountCreatedHeading).toBeVisible();
  await accountPage.clickContinue();

  // Verify logged in
  await expect(accountPage.loggedInText(process.env.USER_NAME)).toBeVisible();

  // Delete account
  await accountPage.deleteAccount();
  await expect(accountPage.accountDeletedHeading).toBeVisible();
  await accountPage.clickContinue();
});
