import {test,expect} from '@playwright/test'


test('Windows', async({page,context})=>{

    await page.goto("https://demoqa.com/browser-windows")

    const newpagepromise= context.waitForEvent('page')

   await page.locator("#tabButton").click()

   const newpage= await newpagepromise

   const newpageheading= newpage.getByText("This is a sample page")


   await expect(newpageheading).toBeVisible()



})