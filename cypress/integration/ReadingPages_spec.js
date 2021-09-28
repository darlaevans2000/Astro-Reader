describe('Users Zodiac Horoscope Reading Pages', () => {

describe('Show todays reading', () => {

    it('Should display todays reading for the selected Zodiac', () => {
      cy.loadTodayAries()
        cy.get('.reading-card').should('be.visible').should('contain', "Date: September 27, 2021")
        .should('contain', "Description: It's finally time for you to think about just one thing: what makes you happy. Fortunately, that happens to be a person who feels the same way. Give yourself the evening off. Refuse to be put in charge of anything.")

    });

    it('Should be able to click yesterdays reading button and display yesterdays reading for the selected Zodiac', () => {
        cy.get('.yesterday-btn').click()
        cy.loadYesterdayAries()
        cy.get('.reading-card').should('be.visible').should('contain', "Date: September 26, 2021")
        .should('contain', "You dont need to prove your worth to those who are not part of your close circle. Stay positive.")

    });

    it('Should be able to click todays button and display todays reading again for the selected Zodiac', () => {
        cy.get('.today-btn1').click()
        cy.loadTodayAries()
        cy.get('.reading-card').should('be.visible').should('contain', "Date: September 27, 2021")
        .should('contain', "Description: It's finally time for you to think about just one thing: what makes you happy. Fortunately, that happens to be a person who feels the same way. Give yourself the evening off. Refuse to be put in charge of anything.")
    });

    it('Should be able to click tomorrows reading button and display tomorrows reading for the selected Zodiac', () => {
        cy.get('.tomorrow-btn').click()
        cy.loadTomorrowAries()
        cy.get('.reading-card').should('be.visible').should('contain', "Date: September 28, 2021")
        .should('contain', "Description: You can be whatever and whoever you'd like. Stay motivated today.")
    });

  });

  describe('Save a Reading & Saved Reading Page', () => {

    it('Should be able to save a reading and see saved readings', () => {
        cy.get('.save-btn').click()
        cy.get('.saved-cards').click()
        cy.get('.saved-card').should('be.visible').should('contain', "Date: September 28, 2021")
    });

    it('Should be able to go home by clicking on header', () => {
        cy.get('h1').click()
        .url().should('eq', 'http://localhost:3000/')
    });

  });


});