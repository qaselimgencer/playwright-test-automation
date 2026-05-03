import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Test Case 9 - Search Product", () => {
  test("Search product and verify results", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    // Step 1-2: Launch browser & navigate to URL
    await homePage.open();
    await expect(homePage.slider).toBeVisible();

    // Step 4: Click Products button
    await homePage.clickProducts();

    // --- FIX FOR GOOGLE ADS (VIGNETTES) ---
    // If a Google Ad appears, we need to refresh or dismiss it.
    // On this specific site, sometimes re-navigating is the most stable way for CI.
    if (page.url().includes("#google_vignette")) {
      await page.goto("https://automationexercise.com/products");
    }
    // ---------------------------------------

    // Step 5: Verify ALL PRODUCTS page is loaded
    // We increased the timeout slightly here because the ad might slow things down
    await expect(productsPage.allProductsHeading).toBeVisible({
      timeout: 15000,
    });

    // Step 6: Enter product name in search input and click search button
    await productsPage.searchProduct("Tshirt");

    // Step 7: Verify 'SEARCHED PRODUCTS' heading is visible
    await expect(
      page.getByRole("heading", {
        name: "Searched Products",
        exact: true,
      }),
    ).toBeVisible();

    // Step 8: Verify the first product in the list is visible
    await expect(productsPage.productList.first()).toBeVisible();
  });
});
