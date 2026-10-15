import {test,expect} from '@playwright/test'

test('Invalid Login', async ({page})=>{


    await page.goto("https://demoqa.com/checkbox")


    await page.locator("//span[@class='rc-tree-switcher rc-tree-switcher_close']").click();

    const desktopcheckbox= page.getByRole('checkbox',{name:"Select Documents",exact:true})

    await desktopcheckbox.click()

    await expect(desktopcheckbox).toBeChecked();

});