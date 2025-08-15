import { expect, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { UploadAndDownload } from '../pages/UploadAndDownload';

import { LeftMenuListPage } from '../pages/LeftMenuListPage';

test.describe('Upload and Download tests', () => {
  let homePage: HomePage;
  let leftMenuListPage: LeftMenuListPage;
  let uploadAndDownload: UploadAndDownload;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    leftMenuListPage = new LeftMenuListPage(page);
    uploadAndDownload = new UploadAndDownload(page);
    await homePage.navigate();
  });

  test('Check that Download file is downloaded', async ({ page }) => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
    });

    await test.step('Navigate to Upload and Download section', async () => {
      await leftMenuListPage.navigateToUploadAndDownloadSection();
    });

    await test.step('Click the Upload and Download button and check downloaded file', async () => {
      const downloadPromise = page.waitForEvent('download'); // 1. Ловим событие загрузки
      await uploadAndDownload.downloadButtonClick(); // 2. Кликаем по кнопке
      const download = await downloadPromise; // 3. Получаем объект загрузки

      // 4. Сохраняем файл в нужную папку
      const path = 'test-results/downloads/myFile.png'; // Название файла можешь указать свое
      await download.saveAs(path);

      // 5. Проверяем, что файл существует
      const fs = require('fs');
      expect(fs.existsSync(path)).toBeTruthy();
    });
  });

  test('Check Upload file', async ({ page }) => {
    await test.step('Open Elements section', async () => {
      await homePage.navigateToElements();
    });

    await test.step('Navigate to Upload and Download section', async () => {
      await leftMenuListPage.navigateToUploadAndDownloadSection();
    });
    await test.step('Click Choose File button and verify', async () => {
      const filePath = 'e2e/resources/qwe.txt';

      const fileInput = page.locator('input[type="file"]');
      await fileInput.setInputFiles(filePath);

      await expect(page.locator('#uploadedFilePath')).toContainText('qwe.txt');
    });
  });
});
