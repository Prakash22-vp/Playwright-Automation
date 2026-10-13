import {test,expect} from '@playwright/test'

test('iframes practice',async({page})=>{

const outerFrame = page.frameLocator('#parent-frame');

const innerFrame = outerFrame.frameLocator('#child-frame');


const inputbox= innerFrame.locator("input[type='text']");

await inputbox.fill("Playwright QA")

await expect(inputbox).toHaveValue("Playwright QA")

});