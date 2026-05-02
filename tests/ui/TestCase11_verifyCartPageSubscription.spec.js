import { expect, test } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { FooterPage } from "../../pages/FooterPage";

test("Test Case 11 - Verify Subscription in Cart Page", async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const footerPage = new FooterPage(page);

  await homePage.open();
  expect(await homePage.slider.isVisible()).toBe(true) ;

  await cartPage.openCart();
  expect(await cartPage.cartTable.isVisible()).toBe(true);   //now verifies either cart table or empty message

  await footerPage.scrollToFooter();
  expect(await footerPage.subscriptionHeading.isVisible()).toBe(true) ;
  await footerPage.subscribe("test@example.com");
  
  expect(await footerPage.successMessage.isVisible()).toBe(true) ;});
