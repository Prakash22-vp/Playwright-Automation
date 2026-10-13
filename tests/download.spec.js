import{test,expect} from '@playwright/test'

import fs from'fs'

test('download practice', async({page,context})=>{

    await page.goto("https://demoqa.com/upload-download")

    const downloadpromise= page.waitForEvent('download')


   await page.locator("#downloadButton").click()

   const download = await downloadpromise;

   await download.saveAs('downloads/sampleFile.jpeg');

    expect(fs.existsSync("downloads/sampleFile.jpeg")).toBeTruthy();

   console.log(download.suggestedFilename())

 expect(download.suggestedFilename()).toBe("sampleFile.jpeg")

    
})