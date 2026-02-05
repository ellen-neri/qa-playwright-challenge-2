import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: 'Search Keywords' });
    this.searchButton = page.getByTitle('Go');
  }

  async navigate() {
    await this.page.goto('https://automationteststore.com/');
    await expect(this.page).toHaveTitle(/A place to practice your automation skills!/);
  }

  async searchForProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
}