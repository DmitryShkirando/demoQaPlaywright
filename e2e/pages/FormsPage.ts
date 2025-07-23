import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormsPage extends BasePage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.locator('#success');
  }

  async fillAndSubmitForm(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }
}
