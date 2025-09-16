"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const HomePage_1 = require("../pages/HomePage");
const ButtonsPage_1 = require("../pages/ButtonsPage");
const LeftMenuListPage_1 = require("../pages/LeftMenuListPage");
test_1.test.describe('Buttons check tests', () => {
    let homePage;
    let buttonsPage;
    let leftMenuListPage;
    test_1.test.beforeEach(async ({ page }) => {
        homePage = new HomePage_1.HomePage(page);
        buttonsPage = new ButtonsPage_1.ButtonsPage(page);
        leftMenuListPage = new LeftMenuListPage_1.LeftMenuListPage(page);
        await homePage.navigate();
    });
    (0, test_1.test)('Check double click functionality', async () => {
        await test_1.test.step('Open Elements section', async () => {
            await homePage.navigateToElements();
        });
        await test_1.test.step('Navigate to Buttons section', async () => {
            await leftMenuListPage.navigateToButtonsSection();
        });
        await test_1.test.step('Perform and verify double click', async () => {
            await buttonsPage.performDoubleClick();
        });
    });
    (0, test_1.test)('Check right click functionality', async () => {
        await test_1.test.step('Open Elements section', async () => {
            await homePage.navigateToElements();
            await homePage.waitForElementVisible(homePage.elementsSection);
        });
        await test_1.test.step('Navigate to Buttons section', async () => {
            await leftMenuListPage.navigateToButtonsSection();
        });
        await test_1.test.step('Perform and verify right click', async () => {
            await buttonsPage.performRightClick();
        });
    });
    (0, test_1.test)('Check dynamic click functionality', async () => {
        await test_1.test.step('Open Elements section', async () => {
            await homePage.navigateToElements();
            await homePage.waitForElementVisible(homePage.elementsSection);
        });
        await test_1.test.step('Navigate to Buttons section', async () => {
            await leftMenuListPage.navigateToButtonsSection();
        });
        await test_1.test.step('Perform and verify dynamic click', async () => {
            await buttonsPage.performDynamicClick();
        });
    });
});
