import {test,expect} from '@playwright/test'

test('Text locator',async({page})=>{


    await page.goto("https://www.saucedemo.com/")

    const pageTitle= page.getByText("Swag Labs")

    await expect(pageTitle).toBeVisible()
})