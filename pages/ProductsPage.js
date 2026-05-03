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

  async clickFirstProduct() {
    await this.firstViewProduct.click();
  }
  async searchProduct(productName) {
    await this.page.locator("#search_product").fill(productName);
    await this.page.locator("#submit_search").click();
  }
}
