import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly elementsSection: Locator;
  readonly elementsSectionInTheList: Locator;
  readonly formsSection: Locator;
  readonly formsSectionInTheList: Locator;

  constructor(page: Page) {
    super(page);
    this.elementsSection = page.locator('path').first(); // уточни селектор, если нужно
    this.elementsSectionInTheList = page.locator('.header-text', { hasText: 'Elements' });

    this.formsSection = page.getByRole('heading', { name: 'Forms' });
    this.formsSectionInTheList = page.locator('.header-text', { hasText: 'Forms' });
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
    await this.waitForPageLoad();
  }

  async navigateToElements() {
    await this.clickElement(this.elementsSection);
    await this.waitForElementVisible(this.elementsSectionInTheList);
  }

  async navigateToForms() {
    await this.clickElement(this.formsSection);
    await this.waitForElementVisible(this.formsSectionInTheList);
  }
}
