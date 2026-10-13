import{test,expect} from '@playwright/test'

test('Practice other locators', async({page})=>{


    await page.goto("http://uitestingplayground.com/cssselectors")

    const primarybuttonid= page.locator("#primary-btn");

    await primarybuttonid.click();

    const classselector = page.locator(".btn.btn-info.css-btn").nth(1)

    await classselector.click();


    const totalclassselectors= page.locator(".css-btn-group .css-btn")

    await expect(totalclassselectors).toHaveCount(3);






})