import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ProductsPage } from "../../pages/ProductsPage";

test.describe("Test Case 9 - Search Product", () => {
  test("Search product and verify results", async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    // Step 1-2: Launch browser & navigate to URL
    await homePage.open();

    // Step 3: Verify home page
    expect(await homePage.slider.isVisible()).toBe(true);

    // Step 4: Click Products
    await homePage.clickProducts();

    // Step 5: Verify ALL PRODUCTS page
    expect(await productsPage.allProductsHeading.isVisible()).toBe(true);
    // Step 6: Enter product name in search input and click search button
    await productsPage.searchProduct("Tshirt");

    // Step 7: Verify 'SEARCHED PRODUCTS' is visible
    expect(
      await page
        .getByRole("heading", {
          name: "Searched Products",
          exact: true,
        })
        .isVisible(),
    ).toBe(true);
    // Step 8: Verify all the products related to search are visible
    expect(await productsPage.productList.first().isVisible()).toBe(true);
  });
});
