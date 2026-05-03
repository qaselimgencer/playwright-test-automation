export class FooterPage {
  constructor(page) {
    this.page = page;
    this.subscriptionHeading = page.getByRole("heading", {
      name: "Subscription",
      exact: true,
    });
    this.emailInput = page.locator("#susbscribe_email");
    this.submitButton = page.locator("#subscribe");
    this.successMessage = page.locator(".alert-success");
  }

  async scrollToFooter() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight),
    );
  }

  async subscribe(email) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
