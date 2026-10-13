import{test,expect} from '@playwright/test'

test('multiple pages test',async({page,context})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    const newpagepromise= context.waitForEvent('page');

    await page.locator("#opentab").click();

    const newpage= await newpagepromise

    await expect(newpage).toHaveURL(/qaclickacademy/);

    await expect(newpage.getByRole('heading',{name:"Invalid SSL certificate"})).toBeVisible()

    console.log(await newpage.title());

    await expect(newpage).toHaveTitle(/Invalid SSL certificate/);

    await expect(page).toHaveURL(
    'https://rahulshettyacademy.com/AutomationPractice/');

    console.log(context.pages().length)

    expect(context.pages()).toHaveLength(2);

})