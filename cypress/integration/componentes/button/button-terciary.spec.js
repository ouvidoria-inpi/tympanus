/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/button.html';
const componentClass = '.br-button.is-tertiary'
const componentClassCancel = '.br-button.is-tertiary'
const fileData = 'button.json';

describe('Validate params of design for the component button - tertiary', () => {
    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.fixture('button.json').then((data) => tokens = data)
    })

    it('Validate font color', () => {
        cy.get(componentClass)
            .should('have.css', 'color')
            .and('eq', tokens.isTerciary.buttonBackgroundColor)
    })

    it('Validate button font weight', () => {
        cy.get(componentClass)
            .should('have.css', 'font-weight')
            .and('eq', tokens.isTerciary.buttonFontWeight)
    })

    it('Validate font size', () => {
        cy.get(componentClass)
            .should('have.css', 'font-size')
            .and('eq', tokens.isTerciary.buttonFontSize)
    })

    it('Validate typography', () => {
        cy.get(componentClass)
            .should('have.css', 'font-family')
            .and('eq', tokens.isTerciary.buttonFontFamily)
    })

    it('Validate button height', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('eq', tokens.isTerciary.buttonHeight)
            .and('eq', '44px')
    })


    it('Validate button padding', () => {
        cy.get(componentClass).invoke('text')
            .then((text) => {
                if (text < 9) {
                    cy.get(componentClass).should('have.css', 'padding')
                        .and('eq', '44px')
                } else {
                    cy.get(componentClass).should('have.css', 'padding')
                        .and('eq', '40px')
                }
            })
    })

    it('Validate button font color on click', () => {
        cy.get(componentClass)
            .click({ force: true }).then(($btn) => {
                cy.get($btn).should('have.css', 'color')
                    .and('eq', tokens.isTerciary.buttonFontColorClick)
            })
    })
})



