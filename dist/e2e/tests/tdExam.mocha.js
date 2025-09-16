"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { expect } = require('chai');
const test_1 = require("@playwright/test");
const HomePage_1 = require("../pages/HomePage");
const ButtonsPage_1 = require("../pages/ButtonsPage");
const LeftMenuListPage_1 = require("../pages/LeftMenuListPage");
//import { describe } from 'mocha';
// Увеличиваем таймаут для Playwright-операций
describe('title', function () {
    this.timeout(30000);
    let browser;
    let page;
    let homePage;
    let buttonsPage;
    let leftMenuListPage;
    before(async function () {
        // Запускаем браузер один раз перед всеми тестами
        browser = await test_1.chromium.launch({ headless: false });
    });
    beforeEach(async function () {
        // Создаем новую страницу и объекты страниц перед каждым тестом
        page = await browser.newPage();
        homePage = new HomePage_1.HomePage(page);
        buttonsPage = new ButtonsPage_1.ButtonsPage(page);
        leftMenuListPage = new LeftMenuListPage_1.LeftMenuListPage(page);
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
        // Добавляем проверку (assertion) - предполагаем, что performDoubleClick()
        // возвращает результат или изменяет состояние, которое можно проверить
        // Пример:
        // const result = await buttonsPage.getDoubleClickResult();
        // expect(result).to.contain('You have done a double click');
    });
});
