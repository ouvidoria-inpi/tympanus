/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/card.html';
const componentClass = '.br-card'
const fileData = 'card.json';

describe('Validate params of design specs for the component card', () => {

  let tokens

  before(() => {
    cy.visit(dsComponenteUrl)
    cy.fixture(fileData).then(data => tokens = data)
  })

  it('Validate card box-shadow', () => {
    cy.get(componentClass)
      .should('have.css', 'box-shadow')
      .and('eq', tokens.boxShadow)
  })
  it('Validate card background-color', () => {
    cy.get(componentClass)
      .should('have.css', 'background-color')
      .and('eq', tokens.bgColor)
  })
  it('Validate card color', () => {
    cy.get(componentClass)
      .should('have.css', 'color')
      .and('eq', tokens.color)
  })
  it('Validate card font-size', () => {
    cy.get(componentClass)
      .should('have.css', 'font-size')
      .and('eq', tokens.fontSize)
  })
  it('Validate card font-weight', () => {
    cy.get(componentClass)
      .should('have.css', 'font-weight')
      .and('eq', tokens.fontWeight)
  })
  //rever esse teste
  it('Validate card is-change-content background-color', () => {
    cy.get('.br-card.is-change-content p.text').first().trigger('mouseover')
      .should('have.css', 'background-color')
      .and('eq', tokens.isChangeContentBgColor)
  })
  it('Validate card is-change-content font color', () => {
    cy.get('.br-card.is-change-content p.text')
      .should('have.css', 'color')
      .and('eq', tokens.isChangeContentFontColor)
  })
  it('Validate card is-change-content font size', () => {
    cy.get('.br-card.is-change-content p.text')
      .should('have.css', 'font-size')
      .and('eq', tokens.fontSize)
  })
  it('Validate card is-change-content font weight', () => {
    cy.get('.br-card.is-change-content p.text')
      .should('have.css', 'font-weight')
      .and('eq', tokens.fontWeight)
  })
  it('Validate card is-change-content line-height', () => {
    cy.get('.br-card.is-change-content p.text')
      .should('have.css', 'line-height')
      .and('eq', tokens.isChangeContentLineHeight)
  })
})
