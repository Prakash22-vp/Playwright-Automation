import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://demoqa.com/select-menu");


    const firstdropdown= page.locator("#react-select-2-input")

    await firstdropdown.click()

    const option= page.getByText("Group 1, option 1")

    await option.click()

    await expect(page.getByText('Group 1, option 1', { exact: true })).toBeVisible();

    await expect(firstdropdown).toHaveText('Yellow');

});
