describe('User Home Page Flow', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000/astro-reader')
  });

  describe('Home Page', () => {

  it('Should have a header with text Astro-Reader on load', () => {
    cy.get('header').contains('Astro-Reader')
  });

  it('Should be able display all Zodiac sign selections', () => {
    cy.get('.card').should('be.visible').should('have.length', 12)
  });

    it('Should be able to click first Zodiac Sign, should update url to matching path and display reading', () => {
        cy.get('.card')
            .first().click()
            .url().should('eq', 'http://localhost:3000/astro-reader/reading/today/aries')
            .url().should('not.eq', 'http://localhost:3000/astro-reader');
    })
  });
});