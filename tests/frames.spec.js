import {test,expect} from '@playwright/test'


test('iframes practice',async({page})=>{


    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette")

    const frame = page.frameLocator("#singleframe")

   

    const inputbox = frame.locator("//input[@type='text']")

    await expect(inputbox).toBeVisible()


await inputbox.fill("Playwright QA");

await expect(inputbox).toHaveValue("Playwright QA");
   
    
})