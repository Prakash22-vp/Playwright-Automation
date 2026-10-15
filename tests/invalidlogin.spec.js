import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://www.saucedemo.com/")

    const username= page.getByPlaceholder("Username")

    await username.fill("standard_user")

    const password= page.locator("#password")

    await password.fill("wrong_password")

 const loginbutton= page.locator("#login-button")

    await loginbutton.click();

    const errormessage= page.getByText("Epic sadface: Username and password do not match any user in this service")

    await expect(errormessage).toBeVisible();

    await expect(page).not.toHaveURL(`https://www.saucedemo.com/inventory.html`)

})