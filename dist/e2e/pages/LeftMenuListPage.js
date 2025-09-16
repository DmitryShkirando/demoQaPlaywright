"use strict";
// This is general class for chossing all items in left side Menu
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftMenuListPage = void 0;
const BasePage_1 = require("./BasePage");
class LeftMenuListPage extends BasePage_1.BasePage {
    buttonsMenuItemElements;
    textBoxMenuItemElements;
    practiceFormMenuItemForms;
    uploadAndDownloadMenuItemElements;
    constructor(page) {
        super(page);
        this.buttonsMenuItemElements = page.getByRole('listitem').filter({ hasText: 'Buttons' });
        this.textBoxMenuItemElements = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.practiceFormMenuItemForms = page
            //this.buttonsMenuItemElements = page.getByRole('listitem').and(page.getByText('Buttons'));
            .getByRole('listitem')
            .filter({ hasText: 'Practice Form' });
        this.uploadAndDownloadMenuItemElements = page
            .getByRole('listitem')
            .filter({ hasText: 'Upload and Download' });
    }
    async navigateToButtonsSection() {
        await this.clickElement(this.buttonsMenuItemElements);
    }
    async navigateToTexBoxSection() {
        await this.clickElement(this.textBoxMenuItemElements);
    }
    async navigateToPracticeFormSection() {
        await this.clickElement(this.practiceFormMenuItemForms);
    }
    async navigateToUploadAndDownloadSection() {
        await this.clickElement(this.uploadAndDownloadMenuItemElements);
    }
}
exports.LeftMenuListPage = LeftMenuListPage;
