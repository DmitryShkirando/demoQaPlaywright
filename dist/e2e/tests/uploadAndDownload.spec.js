"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const HomePage_1 = require("../pages/HomePage");
const UploadAndDownload_1 = require("../pages/UploadAndDownload");
const LeftMenuListPage_1 = require("../pages/LeftMenuListPage");
test_1.test.describe('Upload and Download tests', () => {
    let homePage;
    let leftMenuListPage;
    let uploadAndDownload;
    test_1.test.beforeEach(async ({ page }) => {
        homePage = new HomePage_1.HomePage(page);
        leftMenuListPage = new LeftMenuListPage_1.LeftMenuListPage(page);
        uploadAndDownload = new UploadAndDownload_1.UploadAndDownload(page);
        await homePage.navigate();
    });
    (0, test_1.test)('Check that Download file is downloaded', async ({ page }) => {
        await test_1.test.step('Open Elements section', async () => {
            await homePage.navigateToElements();
        });
        await test_1.test.step('Navigate to Upload and Download section', async () => {
            await leftMenuListPage.navigateToUploadAndDownloadSection();
        });
        await test_1.test.step('Click the Upload and Download button and check downloaded file', async () => {
            const downloadPromise = page.waitForEvent('download'); // 1. Ловим событие загрузки
            await uploadAndDownload.downloadButtonClick(); // 2. Кликаем по кнопке
            const download = await downloadPromise; // 3. Получаем объект загрузки
            // 4. Сохраняем файл в нужную папку
            const path = 'test-results/downloads/myFile.png'; // Название файла можешь указать свое
            await download.saveAs(path);
            // 5. Проверяем, что файл существует
            const fs = require('fs');
            (0, test_1.expect)(fs.existsSync(path)).toBeTruthy();
        });
    });
    (0, test_1.test)('Check Upload file', async ({ page }) => {
        await test_1.test.step('Open Elements section', async () => {
            await homePage.navigateToElements();
        });
        await test_1.test.step('Navigate to Upload and Download section', async () => {
            await leftMenuListPage.navigateToUploadAndDownloadSection();
        });
        await test_1.test.step('Click Choose File button and verify', async () => {
            const filePath = 'e2e/resources/qwe.txt';
            const fileInput = page.locator('input[type="file"]');
            await fileInput.setInputFiles(filePath);
            await (0, test_1.expect)(page.locator('#uploadedFilePath')).toContainText('qwe.txt');
        });
    });
});
