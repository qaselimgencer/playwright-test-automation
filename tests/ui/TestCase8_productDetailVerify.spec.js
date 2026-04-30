import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";
import { ProductDetailPage } from "../../pages/ProductDetailPage";

test.describe("@smoke Test Case 8 - Verify Product Detail Page", () => {
  test("Navigate and verify product details ", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);

    // Step 1-2: Launch browser & navigate to URL
    await page.setViewportSize({ width: 1280, height: 800 });
 
    await homePage.open();

    // Step 3: Verify home page
    await homePage.verifyVisible();

    // Step 4: Click Products
    await homePage.clickProducts();

    // Step 5: Verify ALL PRODUCTS page
    await productsPage.verifyAllProductsPage();

    // Step 6: Verify product list
    await productsPage.verifyProductListVisible();

    // Step 7: Click View Product of first product
    await productsPage.clickFirstProduct();

    // Step 8-9: Verify product detail page
    await productDetailPage.verifyDetails();
  });
});
