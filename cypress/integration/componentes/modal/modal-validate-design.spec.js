/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/modal.html';
const componentClass = '.br-modal.is-small'
const fileData = 'modal.json';

describe('Validate params of design for the component modal - call-to-action', () => {

  before(() => {
    cy.visit(dsComponenteUrl)
  })

  it('Validate call-to-action modal design bg color', () => {
    cy.get('.br-modal')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)')
  })

  it('Validate call-to-action modal design box-shadow', () => {
    cy.get('.br-modal')
      .should('have.css', 'box-shadow')
      .and('eq', 'rgba(0, 0, 0, 0.16) 0px 3px 6px 0px')
  })

  it('Validate call-to-action modal design title color', () => {
    cy.get('.br-modal-title')
      .should('have.css', 'color')
      .and('eq', 'rgb(85, 85, 85)')
  })

  it('Validate call-to-action modal design title font-size', () => {
    cy.get('.br-modal-title')
      .should('have.css', 'font-size')
      .and('eq', '20px')
  })

  it('Validate call-to-action modal design title font-weight', () => {
    cy.get('.br-modal-title')
      .should('have.css', 'font-weight')
      .and('eq', '700')
  })

  it('Validate call-to-action modal text font-size', () => {
    cy.get('.br-modal-body p')
      .should('have.css', 'font-size')
      .and('eq', '16px')
  })

  it('Validate call-to-action modal text font-size color', () => {
    cy.get('.br-modal-body p')
      .should('have.css', 'color')
      .and('eq', 'rgb(85, 85, 85)')
  })
})
