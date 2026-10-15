import {test,expect} from '@playwright/test'

test('Screenshots', async({page})=>{

    await page.goto("https://www.saucedemo.com/")



    await page.getByPlaceholder("Password").screenshot({path:`password.png`})
})