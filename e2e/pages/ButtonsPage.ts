import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { BUTTONS } from '../config/constants';

export class ButtonsPage extends BasePage {
  readonly doubleClickButton: Locator;
  readonly doubleClickMessage: Locator;
  readonly rightClickButton: Locator;
  readonly rightClickMessage: Locator;
  readonly dynamicClickButton: Locator;
  readonly dynamicClickMessage: Locator;

  constructor(page: Page) {
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
    await this.waitForElementToHaveText(this.doubleClickMessage, BUTTONS.DOUBLE_CLICK_TEXT);
  }

  async performRightClick() {
    await this.waitForElementVisible(this.rightClickButton);
    await this.rightClickButton.click({ button: 'right' });
    await this.waitForElementToHaveText(this.rightClickMessage, BUTTONS.RIGHT_CLICK_TEXT);
  }

  async performDynamicClick() {
    await this.waitForElementVisible(this.dynamicClickButton);
    await this.dynamicClickButton.click();
    await this.waitForElementToHaveText(this.dynamicClickMessage, BUTTONS.DYNAMIC_CLICK_TEXT);
  }
}
