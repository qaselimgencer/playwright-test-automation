import { expect } from "@playwright/test";

export class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.productName = page.locator(".product-information h2");
    this.category = page.locator(".product-information p:has-text('Category')");
    this.price = page.locator(".product-information span span");
    this.availability = page.locator(
      ".product-information p:has-text('Availability')",
    );
    this.condition = page.locator(
      ".product-information p:has-text('Condition')",
    );
    this.brand = page.locator(".product-information p:has-text('Brand')");
  }

  async verifyDetails() {
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }
}
