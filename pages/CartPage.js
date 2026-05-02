export class CartPage {
  constructor(page) {
    this.page = page;
    this.emptyCartMessage = page.locator("p.text-center");
    this.productsLink = page.getByRole("link", { name: "here" });
    this.cartTable = page.locator("#cart_info"); // ürünler varsa tablo
  }

  async openCart() {
    await this.page.getByRole("link", { name: "Cart" }).click();
  }

  async clickProductsLink() {
    await this.productsLink.click();
  }
}
