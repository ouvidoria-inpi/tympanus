/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/button.html';
const componentClass = '.br-button.is-cancel'
const fileData = 'button.json';

describe('Validate params of design for the component button - tertiary - Cancelar', () => {

    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate button design color font - Cancelar', () => {
        cy.get(componentClass)
            .should('have.css', 'color')
            .and('eq', tokens.isTerciary.isCancel.buttonFontColor)
    })

    it('Validate button underline font - Cancelar', () => {
        cy.get(componentClass)
            .should('have.css', 'text-decoration')
            .and('eq', tokens.isTerciary.isCancel.buttonDecoration)
    })

    it('Validate button font weight', () => {
        cy.get(componentClass)
            .should('have.css', 'font-weight')
            .and('eq', tokens.isTerciary.isCancel.buttonFontWeight)
    })

    it('Validate font size', () => {
        cy.get(componentClass)
            .should('have.css', 'font-size')
            .and('eq', tokens.isTerciary.isCancel.buttonFontSize)
    })

    it('Validate typography', () => {
        cy.get(componentClass)
            .should('have.css', 'font-family')
            .and('eq', tokens.isTerciary.isCancel.buttonFontFamily)
    })

    it('Validate button height', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('eq', tokens.isTerciary.isCancel.buttonHeight)
    })

    it('Validate button padding', () => {
        cy.get(componentClass)
            .should('have.css', 'padding')
            .and('eq', tokens.isTerciary.isCancel.buttonPadding)
    })

    it('Validate Cancelar button font color on click', () => {
        cy.get(componentClass)
            .click({ force: true }).then(($btn) => {
                cy.get($btn).should('have.css', 'color')
                    .and('eq', tokens.isTerciary.isCancel.buttonFontColorClick)
            })
    })

})
