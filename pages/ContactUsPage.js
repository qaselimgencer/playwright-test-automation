export class ContactUsPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.getByPlaceholder("Name");
    this.emailInput = page.locator("[data-qa='email']");
    this.subjectInput = page.getByPlaceholder("Subject");
    this.messageInput = page.getByPlaceholder("Message");
    this.fileInput = page.locator("input[type='file']");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.successMessage = page.locator("#contact-page .alert-success");
    this.homeButton = page.locator("#contact-page a.btn.btn-success");
    this.heading = page.getByRole("heading", { name: "Get In Touch" });
  }

  async fillForm(name, email, subject, message, filePath) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.subjectInput.fill(subject);
    await this.messageInput.fill(message);
    await this.fileInput.setInputFiles(filePath);
  }

  async submitForm() {
    this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.submitButton.click();
  }

  async clickHomeButton() {
    await this.homeButton.click();
  }
}
