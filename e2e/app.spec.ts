import { test, expect } from '@playwright/test'

test.describe('Mini-app', () => {
  test('navigates to dashboard and creates patient', async ({ page }) => {
    await page.goto('./#/app')
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

    await page.goto('./#/app/pacientes')
    await expect(page.getByRole('heading', { name: 'Pacientes' })).toBeVisible()

    await page.getByRole('button', { name: '+ Novo paciente' }).click()
    await page.getByLabel('Nome *').fill('E2E Test Patient')
    await page.getByLabel('Objetivo *').fill('Teste automatizado')
    await page.getByRole('button', { name: 'Salvar' }).click()

    await expect(page.getByRole('heading', { name: 'E2E Test Patient' })).toBeVisible()
  })

  test('settings page toggles theme', async ({ page }) => {
    await page.goto('./#/app/configuracoes')
    await expect(page.getByRole('heading', { name: 'Configurações' })).toBeVisible()
    await page.getByRole('button', { name: 'Escuro' }).click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })
})
