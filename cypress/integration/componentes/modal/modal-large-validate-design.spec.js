/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/modal.html';
const componentClass = '.br-modal.is-large'
const fileData = 'modal.json';

describe('Validate params of design for the component modal - call-to-action', () => {

  var modalPadding = 16;
  var modalWidth = 640;

  before(() => {
    cy.visit(dsComponenteUrl)
  })

  it('Validate call-to-action modal size', () => {
    cy.get(componentClass)
      .should('have.css', 'padding')
      .and('eq', `${modalPadding}` + 'px')
  })
  it('Validate call-to-action modal size', () => {
    cy.get(componentClass)
      .should('have.css', 'width')
      .and('eq', `${modalWidth}` + 'px')
  })

})
