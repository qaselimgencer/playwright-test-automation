import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test.describe("Test Case 7 - Verify Test Cases Page", () => {
  test("Navigate to Test Cases page", async ({ page }) => {
    const homePage = new HomePage(page);
// Step 1: Set viewport size for consistency,especially for handling responsive elements like ads 
    await page.setViewportSize({ width: 1280, height: 800 });
    // Step 2: Navigate to URL
    await page.goto(process.env.BASE_URL);

    // Step 3: Verify home page is visible
    await homePage.verifyVisible();

    // Step 4: Click 'Test Cases' button
    await homePage.clickTestCases();

    // Step 5: Handle possible vignette ad
    const dismissButton = page.locator("#dismiss-button");
    if (await dismissButton.isVisible()) {
      await dismissButton.click();
    }

    // Step 6: Verify navigation by heading (more reliable)
    await expect(
      page.getByRole("heading", { name: "Test Cases", exact: true }),
    ).toBeVisible();
  });
});
