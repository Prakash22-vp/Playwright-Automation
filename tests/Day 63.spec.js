import {test,expect}  from '@playwright/test' 


test('Name placeholder test',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")


    const namefield= page.getByPlaceholder("Enter Name")

    await expect(namefield).toBeVisible()

    await namefield.fill("Prakash")

    await expect(namefield).toHaveValue("Prakash")

})