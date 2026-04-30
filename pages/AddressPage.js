export class AddressPage {
  constructor(page) {
    this.page = page;
  }

  async fillAddress() {
    await this.page.locator("[data-qa='first_name']").fill("Riza");
    await this.page.locator("[data-qa='last_name']").fill("Gencalp");
    await this.page.locator("[data-qa='company']").fill("Riza Gencalp Company");
    await this.page
      .locator("[data-qa='address']")
      .fill("Riza Gencalp Street No: 8");
    await this.page
      .locator("[data-qa='address2']")
      .fill("Riza Gencalp Street No: 9");
    await this.page.locator("[data-qa='country']").selectOption("Singapore");
    await this.page.locator("[data-qa='state']").fill("Izmir");
    await this.page.locator("[data-qa='city']").fill("Izmir");
    await this.page.locator("[data-qa='zipcode']").fill("35000");
    await this.page.locator("[data-qa='mobile_number']").fill("5551234567");
  }
}
