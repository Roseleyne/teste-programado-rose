describe('Teste-devera clicar Banner Jeans', () => {
  it('Deve clicar no banner de combo de jeans', () => {
    
    cy.visit('https://www.cea.com.br/');

    
    cy.get('.cea-cea-store-theme-2-x-image__item--home-template--news')
      .should('be.visible') 
      .click(); 

    
    cy.url().should('include', '/jeans'); 
  });
});

