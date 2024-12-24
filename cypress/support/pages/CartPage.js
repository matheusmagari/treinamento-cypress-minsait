class CartPage {
    validateItemInCart(itemName) {
      cy.contains('.cart_item', itemName).should('exist');
    }
  
    proceedToCheckout() {
      cy.get('#checkout').click();
    }
  }
  
  export const cartPage = new CartPage();