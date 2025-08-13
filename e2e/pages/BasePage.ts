import { Locator, Page, expect } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async waitForElementVisible(locator: Locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout });
  }

  async waitForElementToHaveText(locator: Locator, text: string, timeout = 5000) {
    await expect(locator).toHaveText(text, { timeout });
  }

  async clickElement(locator: Locator) {
    await this.waitForElementVisible(locator);
    await locator.click();
  }

  async verifyUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }

  async expectElementText(locator: Locator, expectedText: string) {
    await expect(locator).toHaveText(expectedText);
  }
}
