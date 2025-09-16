"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsPage = void 0;
const BasePage_1 = require("./BasePage");
const constants_1 = require("../config/constants");
class ButtonsPage extends BasePage_1.BasePage {
    doubleClickButton;
    doubleClickMessage;
    rightClickButton;
    rightClickMessage;
    dynamicClickButton;
    dynamicClickMessage;
    constructor(page) {
        super(page);
        this.doubleClickButton = page.getByRole('button', { name: 'Double Click Me' });
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickButton = page.getByRole('button', { name: 'Right Click Me' });
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.dynamicClickButton = page.getByRole('button', {
            name: 'Click Me',
            exact: true,
        });
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }
    async performDoubleClick() {
        await this.waitForElementVisible(this.doubleClickButton);
        await this.doubleClickButton.dblclick();
        await this.waitForElementToHaveText(this.doubleClickMessage, constants_1.BUTTONS.DOUBLE_CLICK_TEXT);
    }
    async performRightClick() {
        await this.waitForElementVisible(this.rightClickButton);
        await this.rightClickButton.click({ button: 'right' });
        await this.waitForElementToHaveText(this.rightClickMessage, constants_1.BUTTONS.RIGHT_CLICK_TEXT);
    }
    async performDynamicClick() {
        await this.waitForElementVisible(this.dynamicClickButton);
        await this.dynamicClickButton.click();
        await this.waitForElementToHaveText(this.dynamicClickMessage, constants_1.BUTTONS.DYNAMIC_CLICK_TEXT);
    }
}
exports.ButtonsPage = ButtonsPage;
