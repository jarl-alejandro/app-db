import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Mi tienda' }).click();
  await page.getByRole('link', { name: 'Juegos' }).click();
  await page.getByRole('link', { name: 'New Game' }).click();
  await page.getByPlaceholder('Game name').fill('Nombre del Juego');
  await page.getByPlaceholder('Game developed by').fill('Descripcion de los creadores del Juego');
  await page.getByPlaceholder('Game minimum age').fill('18');
  await page.getByRole('button', { name: 'Save' }).click();
});