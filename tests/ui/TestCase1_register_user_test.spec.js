import { test } from "@playwright/test";
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

  await signupPage.verifyVisible();
  const randomEmail = `process.env.USER_NAME_${Date.now()}@gmail.com`;
  await signupPage.registerNewUser(process.env.USER_NAME, randomEmail);

  await accountInfoPage.fillAccountInfo();
  await addressPage.fillAddress();

  await accountPage.createAccount();
  await accountPage.verifyLoggedIn(process.env.USER_NAME);
  await accountPage.deleteAccount();
});
