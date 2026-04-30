import { expect } from "@playwright/test";

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

  async verifyCartPage() {
    // if products exist, verify cart table is visible; otherwise verify empty cart message 
    if (await this.cartTable.isVisible()) {
      await expect(this.cartTable).toBeVisible();
    } else {
      //if no products, verify empty cart message
      await expect(this.emptyCartMessage).toContainText("Cart is empty!");
    }
  }

  async clickProductsLink() {
    await this.productsLink.click();
  }
}
