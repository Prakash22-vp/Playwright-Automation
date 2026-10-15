import {test,expect} from '@playwright/test'

test('Part 2 Practice', async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    const username= page.getByPlaceholder("Username")

    await username.fill("standard_user")

    const password= page.locator("#password")

    await password.fill("secret_sauce")

    const loginbutton= page.locator("#login-button")

    await loginbutton.click();

    await expect(page).toHaveURL(`https://www.saucedemo.com/inventory.html`)

    const productsheading= page.getByText("Products");

    await expect(productsheading).toBeVisible();

 
})