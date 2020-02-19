/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/card.html';
const componentClass = '.br-card.is-medium'
const fileData = 'card.json';


describe('Validate params of spacing for the component medium card', () => {

  let tokens

  before(() => {
    cy.visit(dsComponenteUrl)
    cy.fixture(fileData).then((data) => tokens = data)
  })

  it('Validate card align-items', () => {
    cy.get(componentClass)
      .should('have.css', 'align-items')
      .and('eq', tokens.alignItems)
  })
  it('Validate card justify-content', () => {
    cy.get(componentClass)
      .should('have.css', 'justify-content')
      .and('eq', tokens.justifyContent)
  })
  it('Validate card margin', () => {
    cy.get(componentClass)
      .should('have.css', 'margin')
      .and('eq', tokens.margin)
  })
  it('Validate card height', () => {
    cy.get(componentClass)
      .should('have.css', 'height')
      .and('eq', tokens.isMediumHeight)
  })
  it('Validate card padding', () => {
    cy.get(componentClass)
      .should('have.css', 'padding')
      .and('eq', tokens.padding)
  })
  it('Validate card width', () => {
    cy.get(componentClass)
      .should('have.css', 'width')
      .and('eq', tokens.isMediumWidth)
  })
})


