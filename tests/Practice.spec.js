import {test, expect} from '@playwright/test'

test('Locators Practice',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")


    const primarybutton = page.getByRole('button',{name:"Primary Action"})

    await primarybutton.click();

    const username= page.getByRole('textbox',{name:"Username:"})

    await username.fill("Prakash")

    const availabletext= page.getByText("This is an important alert message")

    await expect(availabletext).toBeVisible();

    const maillabel= page.getByLabel("Email Address:")

    await maillabel.fill("vp22081998@gmail.com")

    const standardlabel= page.getByLabel("Standard")

    await standardlabel.click();

    const nameplaceholder= page.getByPlaceholder("Enter your full name")

    await nameplaceholder.fill("Prakash")

    const phoneplaceholder= page.getByPlaceholder("Phone number (xxx-xxx-xxxx)")

    await phoneplaceholder.fill("8610368086")


    const playwrightlogo= page.getByAltText("logo image")

    await expect(playwrightlogo).toBeVisible();

    const hometitle= page.getByTitle("Home page link")

    await hometitle.click();

    const editid= page.getByTestId("edit-profile-btn");

    await editid.click();

    const homeid= page.getByTestId("nav-home");

    await homeid.click();
})