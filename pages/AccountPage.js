import { expect } from "@playwright/test";

export class AccountPage {
  constructor(page) {
    this.page = page;
  }

  async createAccount() {
    await this.page.getByRole("button", { name: "Create Account" }).click();
    await expect(
      this.page.getByRole("heading", { name: "Account Created!" }),
    ).toBeVisible();
    await this.page.getByRole("link", { name: "Continue" }).click();
  }

  async verifyLoggedIn(username) {
    await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
  }

  async deleteAccount() {
    await this.page.getByRole("link", { name: "Delete Account" }).click();
    await expect(
      this.page.getByRole("heading", { name: "Account Deleted!" }),
    ).toBeVisible();
    await this.page.getByRole("link", { name: "Continue" }).click();
  }
}
