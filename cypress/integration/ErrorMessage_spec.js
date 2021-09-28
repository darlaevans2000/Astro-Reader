describe('Error Message', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/blah-blah')
  });

  it('Should display an error message to the user', () => {
    cy.get('h1').should("contain", "Uh oh ~ You've ran into an error. Click the page title to go back home.")
  });

})