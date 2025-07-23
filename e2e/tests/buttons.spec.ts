import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ButtonsPage } from '../pages/ButtonsPage';

test.describe('Buttons check tests', () => {
  let homePage: HomePage;
  let buttonsPage: ButtonsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    buttonsPage = new ButtonsPage(page);
    await homePage.navigate();
  });

  test('Check double click functionality', async () => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
      await homePage.waitForElementVisible(homePage.elementsSection);
    });

    await test.step('Navigate to Buttons section', async () => {
      await buttonsPage.navigateToButtonsSection();
      await buttonsPage.waitForElementVisible(buttonsPage.buttonsMenuItem);
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
      await buttonsPage.navigateToButtonsSection();
      await buttonsPage.waitForElementVisible(buttonsPage.buttonsMenuItem);
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
      await buttonsPage.navigateToButtonsSection();
      await buttonsPage.waitForElementVisible(buttonsPage.buttonsMenuItem);
    });

    await test.step('Perform and verify dynamic click', async () => {
      await buttonsPage.performDynamicClick();
    });
  });
});
