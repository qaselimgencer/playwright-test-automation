import { expect } from "@playwright/test";

export class AccountInfoPage {
  constructor(page) {
    this.page = page;
  }

  async fillAccountInfo() {
    await expect(
      this.page.getByRole("heading", { name: "Enter Account Information" }),
    ).toBeVisible();
    await this.page.getByRole("radio", { name: "Mr." }).check();
    await this.page.getByLabel("Password *").fill("123456");
    await this.page.locator("#days").selectOption("8");
    await this.page.locator("#months").selectOption("April");
    await this.page.locator("#years").selectOption("1990");
    await this.page
      .getByRole("checkbox", { name: "Sign up for our newsletter!" })
      .check();
    await this.page
      .getByRole("checkbox", {
        name: "Receive special offers from our partners!",
      })
      .check();
  }
}
