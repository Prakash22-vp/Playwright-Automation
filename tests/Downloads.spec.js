import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


await page.goto("https://demoqa.com/upload-download")

const downloadpromise= page.waitForEvent('download')

await page.locator("#downloadButton").click()

const download = await downloadpromise


 expect(download.suggestedFilename()).toBe("sampleFile.jpeg")



});