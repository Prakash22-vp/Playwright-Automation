import{test,expect} from '@playwright/test'

test('File upload', async({page})=>{

    await page.goto("https://demoqa.com/upload-download")


    await page.locator("#uploadFile").setInputFiles(String.raw`C:\Users\PRAKASH\Downloads\images (12).jpeg`)

      await expect(page.locator("#uploadedFilePath")).toContainText(String.raw`images (12).jpeg`);

   await page.locator('#uploadFile').setInputFiles(String.raw`C:\Users\PRAKASH\Downloads\images (13).jpeg`);

    await expect(page.locator("#uploadedFilePath")).toContainText(String.raw`images (13).jpeg`);

   

})