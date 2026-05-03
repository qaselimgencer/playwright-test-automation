export class AccountPage {
  constructor(page) {
    this.page = page;
    this.createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });
    this.accountCreatedHeading = page.getByRole("heading", {
      name: "Account Created!",
    });
    this.continueLink = page.getByRole("link", { name: "Continue" });
    this.loggedInText = (username) =>
      page.getByText(`Logged in as ${username}`);
    this.deleteAccountLink = page.getByRole("link", { name: "Delete Account" });
    this.accountDeletedHeading = page.getByRole("heading", {
      name: "Account Deleted!",
    });
  }

  async createAccount() {
    await this.createAccountButton.click();
  }

  async clickContinue() {
    await this.continueLink.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
}
