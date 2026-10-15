import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://demoqa.com/radio-button")


    const radiobutton= page.locator("#impressiveRadio")

    await radiobutton.click()

    await expect(radiobutton).toBeChecked()

   const resultmessage= page.getByText("You have selected Impressive")

   await expect(resultmessage).toContainText("You have selected Impressive")

});