import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("[data-qa='login-email']");
    this.passwordInput = page.locator("[data-qa='login-password']");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.getByText("Your email or password is incorrect!");
  }

  async verifyVisible() {
    await expect(
      this.page.getByRole("heading", { name: "Login to your account" }),
    ).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorVisible() {
    await expect(this.errorMessage).toBeVisible();
  }
}
