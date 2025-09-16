"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadAndDownload = void 0;
const BasePage_1 = require("./BasePage");
class UploadAndDownload extends BasePage_1.BasePage {
    downloadButton;
    chooseFileButton;
    constructor(page) {
        super(page);
        this.downloadButton = page.getByRole('link', { name: 'Download' });
        this.chooseFileButton = page.getByRole('button', { name: 'Select a file' });
    }
    async downloadButtonClick() {
        await this.waitForElementVisible(this.downloadButton);
        await this.downloadButton.click();
    }
    async chooseFileButtonClick() {
        await this.waitForElementVisible(this.chooseFileButton);
        await this.chooseFileButton.click();
    }
}
exports.UploadAndDownload = UploadAndDownload;
