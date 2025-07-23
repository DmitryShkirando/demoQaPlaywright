import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export class HomePage extends BasePage {
  readonly header: Header;
  readonly sidebar: Sidebar;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
  }

  async navigate() {
    await this.page.goto('https://demoqa.com/');
    await this.waitForPageLoad();
  }
}
