import { test } from '@playwright/test';
import { FormsPage } from '../pages/FormsPage';
import { HomePage } from '../pages/HomePage';

import { LeftMenuListPage } from '../pages/LeftMenuListPage';

test.describe('Forms check tests', () => {
  let homePage: HomePage;
  let formsPage: FormsPage;
  let leftMenuListPage: LeftMenuListPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    formsPage = new FormsPage(page);
    leftMenuListPage = new LeftMenuListPage(page);
    await homePage.navigate();
  });

  test('Check Name and LastName fields only', async () => {
    await test.step('Open Forms section', async () => {
      await homePage.navigateToForms();
    });

    await test.step('Navigate to Buttons section', async () => {
      await leftMenuListPage.navigateToPracticeFormSection();
      //await formsPage.waitForElementVisible(buttonsPage.buttonsMenuItem);
    });

    // await test.step('Perform and verify double click', async () => {
    //   await formsPage.performDoubleClick();
    // });
  });
});
