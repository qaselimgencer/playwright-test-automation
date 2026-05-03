export class SignupPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator("[data-qa='signup-name']");
    this.emailInput = page.locator("[data-qa='signup-email']");
    this.signupButton = page.getByRole("button", { name: "Signup" });
    this.newUserSignupHeading = page.getByRole("heading", {
      name: "New User Signup!",
    });
  }

  async registerNewUser(name, email) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  } 
}
