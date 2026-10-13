import { test, expect } from '@playwright/test';

test('Verify alert message', async ({ page }) => {


    await page.goto("https://demoqa.com/alerts")


    page.once('dialog',async dialog =>{

        expect(dialog.type()).toBe('alert')

        expect(dialog.message()).toBe("You clicked a button");

        await dialog.accept()

       

    })

    await page.locator("#alertButton").click();


    page.once('dialog',async dialog =>{

        expect(dialog.type()).toBe('prompt')

     await dialog.accept("Thankyou")

  })


    await page.locator("#promtButton").click();


    page.once('dialog', async dialog=>{

        expect (dialog.type()).toBe('confirm')

        await dialog.dismiss()

    })

  await page.locator("#confirmButton").click();
});