import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://koreahaircare.com/')
});

test('Login test with valid url', async ({ page }) => {

    // await page.pause()
    await page.locator('#shopify-section-sections--17261203783908__dcfa9731-dc90-4fc1-83a9-18038821387f').getByRole('link', { name: 'Korea Haircare' })

})

test('Login test to check visibility', async ({ page }) => {

    await page.locator('.hdt-site-nav_icon.hdt-site-nav_user > .hdt-inline-flex').first().click()
    await page.getByRole('heading', { name: 'Log in' })
    await page.locator('//input[@id="CustomerEmail-customer-login-modal-0"]')
    await page.getByRole('textbox', { name: 'Password *' }).isVisible()
    await page.getByRole('button', { name: 'Log in' }).isVisible()

})

test('Login test with valid credentials both', async ({ page }) => {

    await page.locator('.hdt-site-nav_icon.hdt-site-nav_user > .hdt-inline-flex').first().click()
    await page.getByRole('textbox', { name: 'Email *' }).fill("aayush@gmail.com")
    await page.getByRole('textbox', { name: 'Password *' }).fill('12345678hbcnn')
    await page.getByRole('button', { name: 'Log in' }).click()

})
test('Login test invalid email and  password', async ({ page }) => {

    await page.locator('.hdt-site-nav_icon.hdt-site-nav_user > .hdt-inline-flex').first().click()
    await page.getByRole('textbox', { name: 'Email *' }).fill("aayush@gmail.com")
    await page.getByRole('textbox', { name: 'Password *' }).fill('12345678hbcnn')
    await page.getByRole('button', { name: 'Log in' }).click()
})
test('Login test valid email and invalid password', async ({ page }) => {

    await page.locator('.hdt-site-nav_icon.hdt-site-nav_user > .hdt-inline-flex').first().click()
    await page.getByRole('textbox', { name: 'Email *' }).fill("aayushkarki@gmail.com")
    await page.getByRole('textbox', { name: 'Password *' }).fill('12345678hbcnn')
    await page.getByRole('button', { name: 'Log in' }).click()
})
test('Login test invalid email and invalid password', async ({ page }) => {

    // await page.pause()
    await page.locator('.hdt-site-nav_icon.hdt-site-nav_user > .hdt-inline-flex').first().click()
    await page.getByRole('textbox', { name: 'Email *' }).fill("pratiluel@gmail.com")
    await page.getByRole('textbox', { name: 'Password *' }).fill('12345678hbcnn')
    await page.getByRole('button', { name: 'Log in' }).click()
})
// product
// search
// product-view
// quantity add/decrease
//product variation(color, summary), etc
