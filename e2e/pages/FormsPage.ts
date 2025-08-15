import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class FormsPage extends BasePage {
  readonly nameInputField: Locator;
  readonly emailInputField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly mobileNumberInputField: Locator;
  readonly maleRadioButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInputField = page.getByRole('textbox', { name: 'First Name' });
    this.emailInputField = page.getByRole('textbox', { name: 'Last Name' });
    this.mobileNumberInputField = page.getByRole('textbox', { name: 'Mobile Number' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMessage = page.locator('#success');
    this.maleRadioButton = page.getByText('Male', { exact: true });
  }

  async fillAndSubmitForm(name: string, email: string, mobileNumber: string) {
    await this.nameInputField.fill(name);
    await this.emailInputField.fill(email);
    await this.mobileNumberInputField.fill(mobileNumber);
    await this.maleRadioButton.click();
    await this.submitButton.click();
  }
}
