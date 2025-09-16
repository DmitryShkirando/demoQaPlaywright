"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const FormsPage_1 = require("../pages/FormsPage");
const HomePage_1 = require("../pages/HomePage");
const LeftMenuListPage_1 = require("../pages/LeftMenuListPage");
test_1.test.describe('Forms check tests', () => {
    let homePage;
    let formsPage;
    let leftMenuListPage;
    test_1.test.beforeEach(async ({ page }) => {
        homePage = new HomePage_1.HomePage(page);
        formsPage = new FormsPage_1.FormsPage(page);
        leftMenuListPage = new LeftMenuListPage_1.LeftMenuListPage(page);
        await homePage.navigate();
    });
    (0, test_1.test)('Check Name and LastName fields only', async () => {
        await test_1.test.step('Open Forms section', async () => {
            await homePage.navigateToForms();
        });
        await test_1.test.step('Navigate to Practice Form section', async () => {
            await leftMenuListPage.navigateToPracticeFormSection();
        });
        await test_1.test.step('Input First Name and Last Name field', async () => {
            await formsPage.fillAndSubmitForm('Dima', 'sda@.com', '1234567890');
        });
    });
});
