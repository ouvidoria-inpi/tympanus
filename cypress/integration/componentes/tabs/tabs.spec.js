/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/tabs.html';
const componentClass = '.br-modal.is-xsmall'
const fileData = 'abas.json';

describe('Validate params of design for the component button - call-to-action', () => {
  let abas

  beforeEach(() => {
    cy.visit(dsComponenteUrl)
    cy.fixture(fileData).then((data) => abas = data)
  })

  it('Validar os dados a partir do arquivo json', () => {
    cy.get('.name').contains(abas.texto)
  })

  it('Validate border-color', () => {
    cy.get('.name').contains(abas.texto)
      .should('have.css', 'background-color')
      .and('eq', abas.backgroundColor)
  })

})

