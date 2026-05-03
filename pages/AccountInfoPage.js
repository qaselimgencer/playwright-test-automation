export class AccountInfoPage {
  constructor(page) {
    this.page = page;
    this.accountInfoHeading = page.getByRole("heading", {
      name: "Enter Account Information",
    });
    this.mrRadio = page.getByRole("radio", { name: "Mr." });
    this.passwordInput = page.getByLabel("Password *");
    this.daysSelect = page.locator("#days");
    this.monthsSelect = page.locator("#months");
    this.yearsSelect = page.locator("#years");
    this.newsletterCheckbox = page.getByRole("checkbox", {
      name: "Sign up for our newsletter!",
    });
    this.offersCheckbox = page.getByRole("checkbox", {
      name: "Receive special offers from our partners!",
    });
  }

  async fillAccountInfo() {
    await this.mrRadio.check();
    await this.passwordInput.fill("123456");
    await this.daysSelect.selectOption("8");
    await this.monthsSelect.selectOption("April");
    await this.yearsSelect.selectOption("1990");
    await this.newsletterCheckbox.check();
    await this.offersCheckbox.check();
  }
}
