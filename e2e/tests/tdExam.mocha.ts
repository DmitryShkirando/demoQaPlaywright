const { expect } = require('chai');
import { chromium, Browser, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ButtonsPage } from '../pages/ButtonsPage';
import { LeftMenuListPage } from '../pages/LeftMenuListPage';
//import { describe } from 'mocha';

// Увеличиваем таймаут для Playwright-операций
describe('title', function () {
  this.timeout(30000);
  let browser: Browser;
  let page: Page;
  let homePage: HomePage;
  let buttonsPage: ButtonsPage;
  let leftMenuListPage: LeftMenuListPage;

  before(async function () {
    // Запускаем браузер один раз перед всеми тестами
    browser = await chromium.launch({ headless: false });
  });

  beforeEach(async function () {
    // Создаем новую страницу и объекты страниц перед каждым тестом
    page = await browser.newPage();
    homePage = new HomePage(page);
    buttonsPage = new ButtonsPage(page);
    leftMenuListPage = new LeftMenuListPage(page);

    await homePage.navigate();
  });

  afterEach(async function () {
    // Закрываем страницу после каждого теста
    await page.close();
  });

  after(async function () {
    // Закрываем браузер после всех тестов
    await browser.close();
  });

  it('Check double click functionality', async function () {
    // Шаг 1: Open Elements section
    await homePage.navigateToElements();

    // Шаг 2: Navigate to Buttons section
    await leftMenuListPage.navigateToButtonsSection();

    // Шаг 3: Perform and verify double click
    await buttonsPage.performDoubleClick();
  });
});
