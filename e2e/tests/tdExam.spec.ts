import { test, BrowserContext, Browser } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ButtonsPage } from '../pages/ButtonsPage';
import { LeftMenuListPage } from '../pages/LeftMenuListPage';

test.describe('Buttons check tests', () => {
  let homePage: HomePage;
  let buttonsPage: ButtonsPage;
  let leftMenuListPage: LeftMenuListPage;
  let browserContext: BrowserContext;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    buttonsPage = new ButtonsPage(page);
    leftMenuListPage = new LeftMenuListPage(page);

    await homePage.navigate();
  });

  test('Check double click functionality', async () => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
      await leftMenuListPage.navigateToButtonsSection();
      //await homePage.page.context().newPage();
      // const quantity = homePage.page.context().pages().length;
      await homePage.page.evaluate(() => {
        let button = document.getElementById('button1');
        button?.click();
      });
      const attribyte = await homePage.page
        .getByRole('button', { name: 'Double Click Me' })
        .getAttribute('class');
      console.log(attribyte);
      const text = await homePage.page
        .getByRole('button', { name: 'Double Click Me' })
        .textContent();
      console.log(text);

      // homePage.page.context().addCookies([{ name: 'session_id', value: 'abc123def456' }]);
    });

    await test.step('Navigate to Buttons section', async () => {
      await leftMenuListPage.navigateToButtonsSection();
    });

    await test.step('Perform and verify double click', async () => {
      await buttonsPage.performDoubleClick();
    });
  });

  test('Check right click functionality', async () => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
      await homePage.waitForElementVisible(homePage.elementsSection);
    });

    await test.step('Navigate to Buttons section', async () => {
      await leftMenuListPage.navigateToButtonsSection();
    });

    await test.step('Perform and verify right click', async () => {
      await buttonsPage.performRightClick();
    });
  });

  test('Check dynamic click functionality', async () => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
      await homePage.waitForElementVisible(homePage.elementsSection);
    });

    await test.step('Navigate to Buttons section', async () => {
      await leftMenuListPage.navigateToButtonsSection();
    });

    await test.step('Perform and verify dynamic click', async () => {
      await buttonsPage.performDynamicClick();
    });
  });
});
