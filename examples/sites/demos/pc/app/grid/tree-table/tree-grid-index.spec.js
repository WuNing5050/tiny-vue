import { test, expect } from '@playwright/test'

test('展开行序号列配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-tree-table#tree-table-tree-grid-index')
  await page.getByRole('row', { name: '1 GFD 科技 YX 公司 华东区 800' }).locator('.tiny-grid-tree-wrapper').first().click()
  await page
    .getByRole('row', { name: '2 WWWW 科技 YX 公司 华南区 500' })
    .locator('.tiny-grid-tree-wrapper')
    .first()
    .click()
  await page.getByRole('row', { name: '3 TGBYX 公司 华南区 360' }).locator('.tiny-grid-tree-wrapper').first().click()
  await page.getByText('3.1').first().click()
  await page
    .getByRole('row', { name: '4 康康物业 YX 公司 华南区 400' })
    .locator('.tiny-grid-tree-wrapper')
    .first()
    .click()

  await expect(page.getByText('4.1')).toBeVisible()
})
