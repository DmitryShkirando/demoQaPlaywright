import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class Sidebar extends BasePage {
  readonly menuItems: Record<string, Locator>;
  readonly expandedMenuItems: Record<string, Locator>;

  constructor(page: Page) {
    super(page);

    // Основные пункты меню
    this.menuItems = {
      elements: page.locator('.menu-list').getByText('Elements'),
      forms: page.locator('.menu-list').getByText('Forms'),
      alerts: page.locator('.menu-list').getByText('Alerts, Frame & Windows'),
      widgets: page.locator('.menu-list').getByText('Widgets'),
      interactions: page.locator('.menu-list').getByText('Interactions'),
      bookStore: page.locator('.menu-list').getByText('Book Store Application'),
    };

    // Подпункты меню (когда основное меню раскрыто)
    this.expandedMenuItems = {
      // Подпункты для Elements
      textBox: page.locator('.menu-list').getByText('Text Box'),
      checkBox: page.locator('.menu-list').getByText('Check Box'),
      radioButton: page.locator('.menu-list').getByText('Radio Button'),
      webTables: page.locator('.menu-list').getByText('Web Tables'),
      buttons: page.locator('.menu-list').getByText('Buttons'),
      links: page.locator('.menu-list').getByText('Links'),
      brokenLinks: page.locator('.menu-list').getByText('Broken Links - Images'),
      uploadDownload: page.locator('.menu-list').getByText('Upload and Download'),
      dynamicProperties: page.locator('.menu-list').getByText('Dynamic Properties'),

      // Подпункты для Forms
      practiceForm: page.locator('.menu-list').getByText('Practice Form'),

      // Другие подпункты можно добавить по аналогии
    };
  }

  // Общий метод для навигации
  async navigateTo(menuItem: keyof typeof this.menuItems) {
    await this.clickElement(this.menuItems[menuItem]);
  }

  // Методы для конкретных пунктов меню
  async navigateToElements() {
    await this.navigateTo('elements');
  }

  async navigateToForms() {
    await this.navigateTo('forms');
  }

  async navigateToAlerts() {
    await this.navigateTo('alerts');
  }

  // Методы для подпунктов меню
  async navigateToTextBox() {
    await this.navigateToElements();
    await this.clickElement(this.expandedMenuItems.textBox);
  }

  async navigateToPracticeForm() {
    await this.navigateToForms();
    await this.clickElement(this.expandedMenuItems.practiceForm);
  }

  // Метод для проверки видимости всех элементов меню
  async verifyAllMenuItemsVisible() {
    for (const item of Object.values(this.menuItems)) {
      await this.waitForElementVisible(item);
    }
  }
}
