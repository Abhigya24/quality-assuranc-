const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#email';
        this.passwordInput = '//input[@placeholder="Password"]';
        this.loginbutton = '//button[@id="submit"]';
        this.logOut = '//button[@id="logout"]';
        this.loginValidation = '//p[contains(text(),"Click on any contact to view the Contact Details")]';
        this.alertMessage = '//span[@id="error"]'; 
    }

    async login(username, password) {
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }

    async verifyValidLogin() {
        const loginValidation = this.page.locator(this.loginValidation);
        await this.page.waitForTimeout(2000);
        await expect(this.page.locator(this.logOut)).toBeVisible(); 
        await expect(loginValidation).toHaveText('Click on any contact to view the Contact Details');
    }

    async verifyInvalidLogin() {
        const errorMessage = this.page.locator(this.alertMessage); 
        await this.page.waitForTimeout(2000);
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Incorrect username or password'); 
    }
};
//
