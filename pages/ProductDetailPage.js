export class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.productName = page.locator(".product-information h2");
    this.productCategory = page.locator(
      ".product-information p:has-text('Category')",
    );
    this.productPrice = page.locator(".product-information span span");
    this.productAvailability = page.locator(
      ".product-information p:has-text('Availability')",
    );
    this.productCondition = page.locator(
      ".product-information p:has-text('Condition')",
    );
    this.productBrand = page.locator(
      ".product-information p:has-text('Brand')",
    );
  }
}
