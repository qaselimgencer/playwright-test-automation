import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ContactUsPage } from "../../pages/ContactUsPage";
import path from "path";

test.describe("Test Case 6 - Contact Us Form", () => {
  test("Submit contact us form successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);

    
    const baseUrl = process.env.BASE_URL;
    const userName = process.env.USER_NAME; // "Riza Gencalp" gelecek
    const testEmail = process.env.TEST_EMAIL; // "rizagencalp@gmail.com" gelecek

    //we need to upload a file, so we create a test file in the assets folder and get its path
    const filePath = path.resolve(process.cwd(), "assets", "upload-test.txt");

    // Step 2: Navigate to URL
    await page.goto(baseUrl);

    // Step 3: Click 'Contact Us' button
    await homePage.clickContactUs();

    // Step 4: Verify 'Get In Touch' visible
    await expect(contactUsPage.heading).toBeVisible();

    // Step 5: Fill the form
    await contactUsPage.fillForm(
      userName,
      testEmail,
      "Technical Support Request",
      "This is an automated test message from Riza Gencalp.",
      filePath,
    );

    // File verification (upload-test.txt)
    await expect(contactUsPage.fileInput).toHaveValue(/upload-test\.txt/);

    // Submit the form (already handled in the Dialog PageObject)
    await contactUsPage.submitForm();

    // Step 10: Verify success message
    const successLocator = contactUsPage.successMessage;
    await expect(successLocator).toBeVisible({ timeout: 15000 });
    await expect(successLocator).toContainText(/success/i);

    // Step 11: Click Home and verify
    await contactUsPage.clickHomeButton();
    await page.mouse.click(10, 10);
    await expect(homePage.slider).toBeVisible();
  });
});
