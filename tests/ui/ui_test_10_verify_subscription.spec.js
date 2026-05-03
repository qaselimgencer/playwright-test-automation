import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { FooterPage } from "../../pages/FooterPage";

test.describe("@smoke Test Case 10 - Verify Subscription in Footer", () => {
  test("Subscribe with email and verify success message", async ({ page }) => {
    const homePage = new HomePage(page);
    const footerPage = new FooterPage(page);

    // Step 1-2: Launch browser & navigate to URL
    await homePage.open();

    // Step 3: Verify home page
    expect(await homePage.slider.isVisible()).toBe(true);

    // Step 4: Scroll down to footer
    await footerPage.scrollToFooter();

    // Step 5: Verify 'SUBSCRIPTION' text
    expect(await footerPage.subscriptionHeading.isVisible()).toBe(true);
    // Step 6: Enter email and click arrow button
    await footerPage.subscribe("test@example.com");

    // Step 7: Verify success message
    expect(await footerPage.successMessage.isVisible()).toBe(true);
  });
});
