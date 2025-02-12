import { test, expect } from '@playwright/test'

test('禁用状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#dynamic-disable')

  const demo = page.locator('#dynamic-disable')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(switchBtn.first()).toHaveCSS('background-color', 'rgb(179, 214, 255)')
  await expect(switchBtn.nth(1)).toHaveCSS('background-color', 'rgb(219, 219, 219)')
})
