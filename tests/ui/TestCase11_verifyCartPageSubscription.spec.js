import { test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { FooterPage } from "../../pages/FooterPage";

test("Test Case 11 - Verify Subscription in Cart Page", async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const footerPage = new FooterPage(page);

  await homePage.open();
  await homePage.verifyVisible();

  await cartPage.openCart();
  await cartPage.verifyCartPage(); //now verifies either cart table or empty message

  await footerPage.scrollToFooter();
  await footerPage.verifySubscriptionHeading();
  await footerPage.subscribe("test@example.com");
  await footerPage.verifySuccessMessage();
});
