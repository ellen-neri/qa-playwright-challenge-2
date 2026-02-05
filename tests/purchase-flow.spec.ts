import { test, expect } from '@playwright/test';
import { testData } from '../data/testData';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('Should allow a user to search, add product to cart and proceed to checkout', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const product = testData.product.productName;

    await homePage.navigate();
    await expect(page).toHaveTitle(/A place to practice your automation skills!/);
    await homePage.searchForProduct(product);
    await searchResultsPage.selectProduct(product);
    await productPage.addToCart();
    await cartPage.proceedToCheckout();
    await cartPage.selectCheckoutAsGuest();
    await checkoutPage.fillUserDetails(testData.userInfo, testData.location);
    await checkoutPage.verifyConfirmOrderVisible();
});