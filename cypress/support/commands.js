// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import today from '../fixtures/today.json';
import tomorrow from '../fixtures/tomorrow.json';
import yesterday from '../fixtures/yesterday.json';

const baseURL = 'https://aztro.sameerkumar.website/?sign=aries&day='

Cypress.Commands.add('loadTodayAries', () => {
  cy.intercept(`${baseURL}today`, today)
    .visit('http://localhost:3000/astro-reader/reading/today/aries')
});

Cypress.Commands.add('loadTomorrowAries', () => {
  cy.intercept(`${baseURL}tomorrow`, tomorrow)
    .visit('http://localhost:3000/astro-reader/reading/tomorrow/aries')
});

Cypress.Commands.add('loadYesterdayAries', () => {
  cy.intercept(`${baseURL}yesterday`, yesterday)
    .visit('http://localhost:3000/astro-reader/reading/yesterday/aries')
});
