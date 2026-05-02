import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";
import { ProductDetailPage } from "../../pages/ProductDetailPage";

test.describe("@smoke Test Case 8 - Verify Product Detail Page", () => {
  test("Navigate and verify product details", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);

    // Step 1-2: Launch browser & navigate to URL
    await page.setViewportSize({ width: 1280, height: 800 });
    await homePage.open();

    // Step 3: Verify home page
    await expect(page).toHaveTitle(/Automation Exercise/);
    await expect(homePage.slider).toBeVisible();

    // Step 4: Click Products
    await homePage.clickProducts();

    // Step 5: Handle possible vignette ad
    const dismissButton = page.locator("#dismiss-button");
    if (await dismissButton.isVisible()) {
      await dismissButton.click();
    } else {
      // fallback: click somewhere on the page to close vignette
      await page.mouse.click(10, 10);
    }

    // Step 6: Verify ALL PRODUCTS page
    await expect(productsPage.allProductsHeading).toBeVisible();

    // Step 7: Verify product list
    await expect(productsPage.productList.first()).toBeVisible();

    // Step 8: Click View Product of first product
    await productsPage.clickFirstProduct();

    // Step 9: Verify product detail page
    await expect(productDetailPage.productName).toBeVisible();
    await expect(productDetailPage.productCategory).toBeVisible();
    await expect(productDetailPage.productPrice).toBeVisible();
    await expect(productDetailPage.productAvailability).toBeVisible();
    await expect(productDetailPage.productCondition).toBeVisible();
    await expect(productDetailPage.productBrand).toBeVisible();
  });
});
