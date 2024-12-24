class CheckoutPage {
    fillCheckoutDetails(firstName, lastName, zipCode) {
      cy.get('#first-name').type(firstName);
      cy.get('#last-name').type(lastName);
      cy.get('#postal-code').type(zipCode);
    }
  
    continueCheckout() {
      cy.get('#continue').click();
    }
  
    finishCheckout() {
      cy.get('#finish').click();
    }
  
    validateSuccessMessage() {
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    }
  }
  
  export const checkoutPage = new CheckoutPage();