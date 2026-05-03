import { test, expect } from "@playwright/test";
import { SignupPage } from "../../pages/SignupPage";
import { AccountInfoPage } from "../../pages/AccountInfoPage";
import { AddressPage } from "../../pages/AddressPage";
import { AccountPage } from "../../pages/AccountPage";
import { LoginPage } from "../../pages/LoginPage";

test.describe("Login Valid Flow", () => {
  const testEmail = `user_${Date.now()}@gmail.com`; // unique email
  const testPassword = process.env.TEST_PASSWORD;
  const testUserName = process.env.USER_NAME;

  test.beforeAll(async ({ browser }) => {
    const page = await browser.newPage();
    const signupPage = new SignupPage(page);
    const accountInfoPage = new AccountInfoPage(page);
    const addressPage = new AddressPage(page);
    const accountPage = new AccountPage(page);

    await page.goto(process.env.BASE_URL);
    await page.getByRole("link", { name: "Signup / Login" }).click();
    await signupPage.newUserSignupHeading.waitFor({ state: "visible" }) // Wait for the heading to be visible
    expect(await signupPage.newUserSignupHeading.isVisible()).toBe(true);
    await signupPage.registerNewUser(testUserName, testEmail);

    await accountInfoPage.fillAccountInfo(testPassword);
    await addressPage.fillAddress();
    await accountPage.createAccount();
    await page.close();
  });

  test("Login with valid credentials and delete account", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto(process.env.BASE_URL);
    await page.getByRole("link", { name: "Signup / Login" }).click();

    await loginPage.loginHeading.waitFor({ state: "visible" });
    expect(await loginPage.loginHeading.isVisible()).toBe(true);
    await loginPage.login(testEmail, testPassword);

    await expect(page.getByText(`Logged in as ${testUserName}`)).toBeVisible();

    await page.getByRole("link", { name: "Delete Account" }).click();
    await expect(page.getByText("ACCOUNT DELETED!")).toBeVisible();
  });
});
