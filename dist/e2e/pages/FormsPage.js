"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsPage = void 0;
const BasePage_1 = require("./BasePage");
class FormsPage extends BasePage_1.BasePage {
    nameInputField;
    emailInputField;
    submitButton;
    successMessage;
    mobileNumberInputField;
    maleRadioButton;
    constructor(page) {
        super(page);
        this.nameInputField = page.getByRole('textbox', { name: 'First Name' });
        this.emailInputField = page.getByRole('textbox', { name: 'Last Name' });
        this.mobileNumberInputField = page.getByRole('textbox', { name: 'Mobile Number' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('#success');
        this.maleRadioButton = page.getByText('Male', { exact: true });
    }
    async fillAndSubmitForm(name, email, mobileNumber) {
        await this.nameInputField.fill(name);
        await this.emailInputField.fill(email);
        await this.mobileNumberInputField.fill(mobileNumber);
        await this.maleRadioButton.click();
        await this.submitButton.click();
    }
}
exports.FormsPage = FormsPage;
