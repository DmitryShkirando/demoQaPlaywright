import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class Header extends BasePage {
  readonly elementsSection: Locator;

  constructor(page: Page) {
    super(page);
    this.elementsSection = page.locator('path').first();
  }

  async navigateToElements() {
    await this.clickElement(this.elementsSection);
  }
}
