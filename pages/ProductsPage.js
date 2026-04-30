import { expect } from "@playwright/test";

export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.allProductsHeading = page.getByRole("heading", {
      name: "All Products",
      exact: true,
    });
    this.productList = page.locator(".features_items .col-sm-4");
    this.firstViewProduct = this.productList
      .first()
      .getByRole("link", { name: "View Product" });
  }

  async verifyAllProductsPage() {
    await expect(this.allProductsHeading).toBeVisible(); // Step 5
  }

  async verifyProductListVisible() {
    await expect(this.productList.first()).toBeVisible(); // Step 6
  }

  async clickFirstProduct() {
    await this.firstViewProduct.click();
  }
  async searchProduct(productName) {
    await this.page.locator("#search_product").fill(productName);
    await this.page.locator("#submit_search").click();
  }

  async verifySearchedProductsVisible() {
    await expect(
      this.page.getByRole("heading", {
        name: "Searched Products",
        exact: true,
      }),
    ).toBeVisible();

    // Optionally, verify that at least one product is visible in the search results
    await expect(this.productList.first()).toBeVisible();
  }
}
