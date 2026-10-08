import {test,expect} from '@playwright/test'

test('getbyrole locator', async({page})=>{

    await page.goto("https://www.saucedemo.com/")

    const  loginbutton=page.getByRole('button',{name:"Login"})

    await expect(loginbutton).toBeVisible()


    const usernameInput= page.getByRole('textbox',{name:'Username'})

await usernameInput.fill("standard_user")
   
})


