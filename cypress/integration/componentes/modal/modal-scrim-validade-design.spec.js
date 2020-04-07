/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/modal.html';
const componentClass = '.br-scrim.is-foco.is-active .br-modal.is-medium'
const fileData = 'modal.json';

const WIDTH = 1024
const WDIFF = (1024 - 17) / 2
const HEIGHT = 768

describe('Validate params of design for the component modal - call-to-action', () => {

  before(() => {
    cy.visit(dsComponenteUrl)
    cy.wait(500)
    cy.get('button').contains('Modal com Scrim').click()
  })

  it('Validate call-to-action modal scrim position absolute', () => {
    cy.get(componentClass)
      .should('have.css', 'position')
      .and('eq', 'absolute')
  })

  it('Validate call-to-action modal scrim position left', () => {
    cy.get(componentClass)
      .should('have.css', 'left')
      .and('eq', WDIFF + 'px')
  })
  it('Validate call-to-action modal scrim position top', () => {
    cy.get(componentClass)
      .should('have.css', 'top')
      .and('eq', HEIGHT / 2 + 'px')
  })
})
