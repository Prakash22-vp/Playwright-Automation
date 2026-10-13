import{test,expect} from '@playwright/test'

test('multiple tabs',async({page,context})=>{


    await page.goto("https://www.saucedemo.com/")

    const newpage= await context.newPage()

    await newpage.goto("https://www.saucedemo.com/")

    await expect(newpage).toHaveTitle("Swag Labs")

    expect(context.pages()).toHaveLength(2);


    await newpage.close()

     expect(context.pages()).toHaveLength(1);

     await expect(page).toHaveURL('https://www.saucedemo.com/');


})




