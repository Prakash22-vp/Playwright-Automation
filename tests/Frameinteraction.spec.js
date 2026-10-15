import {test,expect} from '@playwright/test'

test('Frames test', async({page})=>{


await page.goto("https://demoqa.com/frames")

const firstframe= page.frameLocator("#frame1")


const heading= firstframe.getByText("This is a sample page")

await expect(heading).toBeVisible()





});