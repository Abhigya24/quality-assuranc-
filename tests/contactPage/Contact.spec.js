import {test} from '@playwright/test';
import{loginPage} from '../../pageObject/login.po';
import {contactPage} from '../../pageObject/contact.po';
import { access } from 'fs';
import { create } from 'domain';
const testdata = require('../../fixtures/LoginFixture.json');
const Contacttestdata = require('../../fixtures/ContactFixture.json');

test.beforeEach(async ({page}) => {
    const login = new loginPage(page);
    await page.goto('/');
    await login.login(testdata.validuser.username, testdata.validuser.password);
    await login.verifyValidLogin();
}
);
test.describe('Constact testcases',() => {
    test('Contact Add test', async ({page,request}) => {
        const contact = new contactPage(page);
        await contact.contactAdd(Contacttestdata.contact.firstName,contacttestdata.contact.lastName,Contacttestdata.contact.dob,Contacttestdata.contact.email,Contacttestdata.contact.phone,Contacttestdata.contact.address,Contacttestdata.contact.state,Contacttestdata.contact.postalCode,Contacttestdata.contact.country);
        await contact.validateContactCreated(Contacttestdata.contact.firstName,Contacttestdata.contact.lastName,Contacttestdata.contact.dob,Contacttestdata.contact.email,Contacttestdata.contact.phone,Contacttestdata.contact.address,Contacttestdata.contact.state,Contacttestdata.contact.postalCode,Contacttestdata.contact.country);
    });
});
    await expect(statevalidation).toHaveText(state);
test('Contact Edit test', async ({page,request}) => {
    const Data={
        "firstName": "John",
        "lastName": "Doe",
        "birthdate": "1999-12-31",
        "email": "johndoe@gmail.com",
        "phone": "1234567890",
        "street1": "address 1",
        "city": "city1",
        "stateProvince": "state1",
        "postalCode": "123456",
        "country": "Nepal"
    };
    const contact = new contactPage(page);
    accessToken = await contact.authenticateUser(testdata.validuser.username, testdata.validuser.password, {request});
    await createEntity(Data, accessToken, '/contact', {request});
    page.reload();
    await contact.viewCreatedContact();
    await contact.contactEdit(contactTestdata.contactEdit.firstName);
    await contact.validateContactCreated(contactTestdata.contactEdit.firstName, contactTestdata.contactEdit.lastName, contactTestdata.contactEdit.dob, contactTestdata.contactEdit.email, contactTestdata.contactEdit.phone, contactTestdata.contactEdit.address, contactTestdata.contactEdit.state, contactTestdata.contactEdit.postalCode, contactTestdata.contactEdit.country);

    }