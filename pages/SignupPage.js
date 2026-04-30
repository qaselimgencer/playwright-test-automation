import { expect } from "@playwright/test";

export class SignupPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator("[data-qa='signup-name']");
    this.emailInput = page.locator("[data-qa='signup-email']");
    this.signupButton = page.getByRole("button", { name: "Signup" });
  }

  async verifyVisible() {
    await expect(
      this.page.getByRole("heading", { name: "New User Signup!" }),
    ).toBeVisible();
  }

  async registerNewUser(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}
