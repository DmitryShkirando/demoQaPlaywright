"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const test_1 = require("@playwright/test");
class BasePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded');
    }
    async waitForElementVisible(locator, timeout = 5000) {
        await (0, test_1.expect)(locator).toBeVisible({ timeout });
    }
    async waitForElementToHaveText(locator, text, timeout = 5000) {
        await (0, test_1.expect)(locator).toHaveText(text, { timeout });
    }
    async clickElement(locator) {
        await this.waitForElementVisible(locator);
        await locator.click();
    }
    async verifyUrlContains(text) {
        await (0, test_1.expect)(this.page).toHaveURL(new RegExp(text));
    }
    async expectElementText(locator, expectedText) {
        await (0, test_1.expect)(locator).toHaveText(expectedText);
    }
}
exports.BasePage = BasePage;
