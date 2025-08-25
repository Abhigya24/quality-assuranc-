import {test} from "@playwright/test";
import {LoginPage} from "../test_objects/login.po.js";
import { log } from "console";
const testData = require('../fixture/loginfixture.json');


test.beforeEach(async({page}) => {
    await page.goto('/');
});

test.describe('Valid login tests', () => {
   test('Login using valid username and password', async({page}) =>{
    const login = new LoginPage(page);
    await login.login(testData.validUser.username, testData.validUser.password);
    await login.verifyValidLogin();
    await login.verifyValidLogin();
   });
});
