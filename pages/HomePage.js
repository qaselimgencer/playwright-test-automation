export class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLink = page.getByRole("link", { name: "Signup / Login" });
    this.slider = this.page.locator("#slider");
  }

  async open() {
    await this.page.goto("https://automationexercise.com/");
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

  async clickProducts() {
    return this.page.getByRole("link", { name: "Products" }).click();
  }
}
