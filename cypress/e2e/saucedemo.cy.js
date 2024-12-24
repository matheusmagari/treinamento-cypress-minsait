import { loginPage } from '../support/pages/LoginPage';
import { productsPage } from '../support/pages/ProductsPage';
import { cartPage } from '../support/pages/CartPage';
import { checkoutPage } from '../support/pages/CheckoutPage';
import users from '../fixtures/users.json';
import { faker } from '@faker-js/faker';

describe('SauceDemo Automation', () => {
  it('Login com credenciais válidas', () => {
    loginPage.visit();
    loginPage.fillUsername(users.validUser.username);
    loginPage.fillPassword(users.validUser.password);
    loginPage.submit();
    productsPage.validateTitle();
  });

  it('Login com credenciais inválidas', () => {
    loginPage.visit();
    loginPage.fillUsername(users.invalidUser.username);
    loginPage.fillPassword(users.invalidUser.password);
    loginPage.submit();
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });

  it('Adiconar item no carrinho e validar', () => {
    loginPage.visit();
    loginPage.fillUsername(users.validUser.username);
    loginPage.fillPassword(users.validUser.password);
    loginPage.submit();
    productsPage.addItemToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.validateItemInCart('Sauce Labs Backpack');
  });

  it('Fazer checkout', () => {
    loginPage.visit();
    loginPage.fillUsername(users.validUser.username);
    loginPage.fillPassword(users.validUser.password);
    loginPage.submit();
    productsPage.addItemToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.proceedToCheckout();

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const zipCode = faker.address.zipCode();

    checkoutPage.fillCheckoutDetails(firstName, lastName, zipCode);
    checkoutPage.continueCheckout();
    checkoutPage.finishCheckout();
    checkoutPage.validateSuccessMessage();
  });

  it('Erro ao tentar fazer checkout sem preenhimento doa campos obrigatórios', () => {
    loginPage.visit();
    loginPage.fillUsername(users.validUser.username);
    loginPage.fillPassword(users.validUser.password);
    loginPage.submit();
    productsPage.addItemToCart('Sauce Labs Backpack');
    productsPage.openCart();
    cartPage.proceedToCheckout();

    checkoutPage.continueCheckout();
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is required');
  });
});