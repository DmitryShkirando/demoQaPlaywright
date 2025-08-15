// This is general class for chossing all items in left side Menu

import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LeftMenuListPage extends BasePage {
  readonly buttonsMenuItemElements: Locator;
  readonly textBoxMenuItemElements: Locator;
  readonly practiceFormMenuItemForms: Locator;
  readonly uploadAndDownloadMenuItemElements: Locator;

  constructor(page: Page) {
    super(page);
    this.buttonsMenuItemElements = page.getByRole('listitem').filter({ hasText: 'Buttons' });
    this.textBoxMenuItemElements = page.getByRole('listitem').filter({ hasText: 'Text Box' });
    this.practiceFormMenuItemForms = page
      .getByRole('listitem')
      .filter({ hasText: 'Practice Form' });
    this.uploadAndDownloadMenuItemElements = page
      .getByRole('listitem')
      .filter({ hasText: 'Upload and Download' });
  }

  async navigateToButtonsSection() {
    await this.clickElement(this.buttonsMenuItemElements);
  }
  async navigateToTexBoxSection() {
    await this.clickElement(this.textBoxMenuItemElements);
  }
  async navigateToPracticeFormSection() {
    await this.clickElement(this.practiceFormMenuItemForms);
  }
  async navigateToUploadAndDownloadSection() {
    await this.clickElement(this.uploadAndDownloadMenuItemElements);
  }
}
