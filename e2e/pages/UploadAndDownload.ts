import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadAndDownload extends BasePage {
  readonly downloadButton: Locator;
  readonly chooseFileButton: Locator;

  constructor(page: Page) {
    super(page);
    this.downloadButton = page.getByRole('link', { name: 'Download' });
    this.chooseFileButton = page.getByRole('button', { name: 'Select a file' });
  }

  async downloadButtonClick() {
    await this.waitForElementVisible(this.downloadButton);
    await this.downloadButton.click();
  }
  async chooseFileButtonClick() {
    await this.waitForElementVisible(this.chooseFileButton);
    await this.chooseFileButton.click();
  }
}
