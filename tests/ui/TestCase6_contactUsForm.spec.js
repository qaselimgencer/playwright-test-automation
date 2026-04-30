import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { time } from "node:console";

test.describe("Test Case 6 - Contact Us Form", () => {
  test("Submit contact us form successfully", async ({ page }) => {
    const homePage = new HomePage(page);
    // Step 2: Navigate to URL
    await page.goto(process.env.BASE_URL, { timeout: 50000 });
    // Step 3: Click 'Contact Us' button
    await homePage.clickContactUs();
    // Step 4: Verify 'Get In Touch' is visible
    await expect(
      page.getByRole("heading", { name: "Get In Touch" }),
    ).toBeVisible();
    // Step 5: Fill all details in the form and upload file
    await page.getByPlaceholder("Name").fill(process.env.USER_NAME);
    await page.locator("[data-qa='email']").fill(process.env.TEST_EMAIL);
    await page.getByPlaceholder("Subject").fill("Test Subject");
    await page.getByPlaceholder("Message").fill("This is a test message.");
    const filePath =
      "C:\\Users\\LENOVO\\Downloads\\Karakaya_1923_Sitesi_Denetim_Raporu.docx";
    const fileInput = page.locator("input[type='file']");
    await fileInput.setInputFiles(filePath);
    await expect(fileInput).toHaveValue(
      /Karakaya_1923_Sitesi_Denetim_Raporu\.docx/,
    );

    // Step 8-9: Click 'Submit' and handle alert
    page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await page.getByRole("button", { name: "Submit" }).click();

    // Step 10: Verify success message (specific to contact form)
    await expect(page.locator("#contact-page .alert-success")).toHaveText(
      "Success! Your details have been submitted successfully.",
    );

    // Step 11: Click 'Home' button and verify home page
    await page.locator("#contact-page a.btn.btn-success").click();
    // Verify home page loaded
    await expect(page.locator("#slider")).toBeVisible;
  });
});
