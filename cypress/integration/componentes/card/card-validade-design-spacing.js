/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/card.html';
const componentClass = '.br-card'
const fileData = 'card.json';

describe('Validate params of spacing for the component card', () => {

  let tokens

  before(() => {
    cy.visit(dsComponenteUrl)
    cy.fixture(fileData).then((data) => tokens = data)
  })

  it('Validate card margin', () => {
    cy.get('.br-card')
      .should('have.css', 'margin')
      .and('eq', tokens.margin)
  })
  it('Validate card padding', () => {
    cy.get('.br-card')
      .should('have.css', 'padding')
      .and('eq', tokens.padding)
  })
  it('Validate card justify-content', () => {
    cy.get('.br-card')
      .should('have.css', 'justify-content')
      .and('eq', tokens.justifyContent)
  })
  it('Validate card align-items', () => {
    cy.get('.br-card')
      .should('have.css', 'align-items')
      .and('eq', tokens.alignItems)
  })
})
