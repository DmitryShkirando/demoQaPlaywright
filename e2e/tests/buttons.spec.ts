import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ButtonsPage } from '../pages/ButtonsPage';
import { LeftMenuListPage } from '../pages/LeftMenuListPage';

test.describe('Buttons check tests', () => {
  let homePage: HomePage;
  let buttonsPage: ButtonsPage;
  let leftMenuListPage: LeftMenuListPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    buttonsPage = new ButtonsPage(page);
    leftMenuListPage = new LeftMenuListPage(page);
    await homePage.navigate();
  });

  test('Check double click functionality', async () => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
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
