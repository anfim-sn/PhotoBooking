import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/booking');
  await page.getByPlaceholder('name').fill('Алексей');
  await page.getByPlaceholder('email').fill('ale@sdf.ru');
  await page.getByPlaceholder('phone').fill('89960225434');
  await page.getByRole('combobox', { name: 'Room' }).selectOption('2');
  await page.getByText('Stylist').click();
  await page.getByLabel('Select day').fill('2023-07-15');
  await page.getByLabel('From').fill('10:49');
  await page.getByLabel('To').fill('11:59');
  await page.getByText('Cash').click();
  await page.getByLabel('Send some spam on my email').check();
  await page.getByText('I agree with the terms of use of the studio').click();
  await page.click("#submit-button")
});