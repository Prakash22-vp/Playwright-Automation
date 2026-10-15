import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://demoqa.com/alerts")

   page.once('dialog',async dialog=>{


      expect(dialog.message()).toBe("This alert appeared after 5 seconds");

    await dialog.accept()



   })

    await page.locator("#timerAlertButton").click()



});