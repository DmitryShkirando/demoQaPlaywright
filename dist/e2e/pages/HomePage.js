"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const BasePage_1 = require("./BasePage");
class HomePage extends BasePage_1.BasePage {
    elementsSection;
    elementsSectionInTheList;
    formsSection;
    formsSectionInTheList;
    constructor(page) {
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
exports.HomePage = HomePage;
