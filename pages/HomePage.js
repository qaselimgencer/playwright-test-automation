import { expect } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLink = page.getByRole("link", { name: "Signup / Login" });
  }

  async open() {
    await this.page.goto("https://automationexercise.com/");
    await expect(this.page).toHaveTitle(/Automation Exercise/);
  }

  async goToSignup() {
    await this.signupLink.click();
  }

  async clickContactUs() {
    await this.page.getByRole("link", { name: "Contact Us" }).click();
  }

  async clickTestCases() {
    await this.page.getByRole("link", { name: "Test Cases" }).first().click();
 

    // Handle potential pop-up
    const dismissButton = this.page.locator("#dismiss-button");
    if (await dismissButton.isVisible()) {
      await dismissButton.click();
    }
  }
  async verifyVisible() {
    await expect(this.page.locator("#slider")).toBeVisible();
  }
  async clickProducts() {
    return this.page.getByRole("link", { name: "Products" }).click();
  }
}