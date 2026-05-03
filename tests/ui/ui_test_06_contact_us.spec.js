import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { ContactUsPage } from "../../pages/ContactUsPage";

test.describe("Test Case 6 - Contact Us Form", () => {
  test("Submit contact us form successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);

    // Test data
    const baseUrl = "https://automationexercise.com/";
    const userName = "Selim Tester";
    const testEmail = "selim.tester@example.com";
    const filePath =
      "C:\\Users\\LENOVO\\Downloads\\Karakaya_1923_Sitesi_Denetim_Raporu.docx";

    // Step 2: Navigate to URL
    await page.goto(baseUrl);

    // Step 3: Click 'Contact Us' button
    await homePage.clickContactUs();

    // Step 4: Verify 'Get In Touch' is visible
    await expect(contactUsPage.heading).toBeVisible();

    // Step 5: Fill form + upload file
    await contactUsPage.fillForm(
      userName,
      testEmail,
      "Test Subject",
      "This is a test message.",
      filePath,
    );

    await expect(contactUsPage.fileInput).toHaveValue(
      /Karakaya_1923_Sitesi_Denetim_Raporu\.docx/,
    );

    // CRITICAL:Alert handle needed for file upload, otherwise test will fail due to unhandled alert
      await contactUsPage.submitForm();

    // Step 10: Verify success message
    const successLocator = contactUsPage.successMessage;

    await expect(successLocator).toBeVisible({ timeout: 15000 });
    await expect(successLocator).toContainText(/success/i);

    // Step 11: Click Home and verify
    await contactUsPage.clickHomeButton();

    // fallback click (overlay ihtimaline karşı)
    await page.mouse.click(10, 10);

    await expect(homePage.slider).toBeVisible();
  });
});
