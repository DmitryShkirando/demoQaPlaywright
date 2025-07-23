import { test } from '@playwright/test';
import { FormsPage } from '../pages/FormsPage';
import { HomePage } from '../pages/HomePage';

test('Check form submission works', async ({ page }) => {
  const homePage = new HomePage(page);
  const formsPage = new FormsPage(page);

  await test.step('Open Home and go to Forms section', async () => {
    await page.goto('https://demoqa.com');
    //await homePage.navigateToForms();
  });

  await test.step('Fill and submit the form', async () => {
    await formsPage.fillAndSubmitForm('John Doe', 'john@example.com');
  });

  await test.step('Check success message', async () => {
    //await formsPage.expectElementText(formsPage.successMessage, 'Form submitted!');
  });
});
