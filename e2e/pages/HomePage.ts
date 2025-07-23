import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly elementsSection: Locator;

  constructor(page: Page) {
    super(page);
    this.elementsSection = page.locator('path').first(); // уточни селектор, если нужно
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
    await this.waitForPageLoad();
  }

  async navigateToElements() {
    await this.clickElement(this.elementsSection);
  }
}
