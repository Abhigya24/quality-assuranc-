const {expect} = require("@playwright/test");

exports.contactPage = class ContactPage {
    constructor(page) {
        this.page= page;
        this.addContact = '//button[@id="addContact"]';
        this.firstName = '#firstName';
        this.lastName = '#lastName';
        this.dob= '//input[@placeholder="yyyy-mm-dd"]';
        this.email = '//input[@id="Email"]';
        this.phone = '//input[@id="phone"]';
        this.address = '//textarea[@id="address"]';
        this.state= 'placeholder="State or Province"';
        this.postalCode = '//input[@id="postal Code"]';
        this.country = '//input[@id="country"]';
        this.save = '//button[@id="save"]';
        this.savedfirstName = '//span[@id="firstName"]';
        this.savedLastName = '//span[@id="lastName"]';
        this.saveddob = '//span[@id="birthdate"]';
        this.savedEmail = '//span[@id="email"]';
        this.savedPhone = '//span[@id="phone"]';
        this.savedAddress = '//span[@id="street 1 "]';
        this.savedPhone = '//span[@id="phone"]';
        this.savedState = '//span[@id="state"]';
        this.savedPostalCode = '//span[@id="postal code"]';
        this.savedCountry = '//span[@id="country"]';
        this.viewCreatedContact = '//th[contains(text(),"Name")]//following;;td[2]';
        this.editContact = '//button[@id="edit-Contact"]';
        this.deleteContact = '//button[@id="delete-Contact"]';

}
async ContactAdd(firstName, lastName, dob, email, phone, address, state, postalCode, country) {
    await this.page.click(this.addContact).click();
    await this.page.fill(this.firstName, firstName).fill(firstName);
    await this.page.fill(this.lastName, lastName).fill(lastName);
    await this.page.fill(this.dob, dob).fill(dateOfBirth);
    await this.page.fill(this.email, email).fill(email);
    await this.page.fill(this.phone, phone).fill(phone);
    await this.page.fill(this.address, address).fill(address);
    await this.page.fill(this.state, state).fill(state);
    await this.page.fill(this.postalCode, postalCode).fill(postalCode);
    await this.page.fill(this.country, country).fill(country);
    await this.page.click(this.save).click();
}
async validateContactCreated(firstName, lastName, dob, email, phone, address, state, postalCode, country) {
    const fnamevalidation = await this.page.locator(this.savedfirstName);
    const lnamevalidation = await this.page.locator(this.savedLastName);
    const dobvalidation = await this.page.locator(this.savedDOB);
    const emailvalidation = await this.page.locator(this.savedEmail);
    const phonevalidation = await this.page.locator(this.savedPhone);
    const addressvalidation = await this.page.locator(this.savedAddress);
    const statevalidation = await this.page.locator(this.savedState);
    const postalCodevalidation = await this.page.locator(this.savedPostalCode);
    const countryvalidation = await this.page.locator(this.savedCountry);
    await expect(fnamevalidation).toHaveText(firstName);
    await expect(lnamevalidation).toHaveText(lastName);
    await expect(dobvalidation).toHaveText(dob);
    await expect(emailvalidation).toHaveText(email);
    await expect(phonevalidation).toHaveText(phone);
    await expect(addressvalidation).toHaveText(address);
    await expect(statevalidation).toHaveText(state);
    await expect(postalCodevalidation).toHaveText(postalCode);
    await expect(countryvalidation).toHaveText(country);
 
} async viewCreatedContact() {
    await this.page.locator(this.viewCreatedContact).click();
}
async contactEdit(firstName) {
    await this.page.locator(this.editContact).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.firstName).click();
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.waitForTimeout(2000);
    await this.page.locator(this.save).click();
}