import { test, expect } from '@playwright/test';

test('Mouse hover practice', async ({ page }) => {

  await page.goto('https://vinothqaacademy.com/mouse-event/');


await page.locator("#doubleBtn").dblclick();

await page.locator("#rightBtn").click({button:"right"})


const source= page.locator("#dragItem");

const target= page.locator("#dropZone")

await source.dragTo(target)

const tooltip= page.locator("#tooltipTarget")

await tooltip.hover()

const tooltiptext= page.locator(".tooltip-text")

await expect(tooltiptext).toBeVisible()

await expect(tooltiptext).toHaveText("This is tooltip text")
await page.pause()

});