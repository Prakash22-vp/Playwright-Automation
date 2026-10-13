import {test,expect} from '@playwright/test'

test('Automating Swag Labs',async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    await expect(page).toHaveTitle("Swag Labs");

    const username= page.getByPlaceholder("Username")

    await username.fill("standard_user")

    const password= page.locator("#password")

    await password.fill("secret_sauce")

    const loginbutton= page.getByRole('button',{name:"Login"})
    
    await loginbutton.click();

    await expect(page).toHaveURL(/inventory.html/)

    const heading= page.getByText("Products")

    await expect(heading).toBeVisible();


    
})