class ProductsPage {
    validateTitle() {
      cy.get('.title').should('contain.text', 'Products');
    }
  
    addItemToCart(itemName) {
      cy.contains('.inventory_item', itemName).find('button').click();
    }
  
    openCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export const productsPage = new ProductsPage();
  