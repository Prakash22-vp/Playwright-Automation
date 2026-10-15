import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://demoqa.com/select-menu")


   const dropdown = page.locator("#oldSelectMenu");

await dropdown.selectOption({ label: "Yellow" });

    await expect(
        dropdown.locator('option:checked')
    ).toHaveText('Yellow');
});

