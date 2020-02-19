/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/button.html';
const componentClass = '.br-button.is-call-to-action'
const fileData = 'button.json';

describe('Validate params of design for the component button - secondary', () => {
    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate button design color secondary', () => {
        cy.get(componentClass)
            .should('have.css', 'background-color')
            .and('eq', tokens.isSecondary.buttonBackgroundColor)
    })

    it('Validate button font weight', () => {
        cy.get(componentClass)
            .should('have.css', 'font-weight')
            .and('eq', tokens.isSecondary.buttonFontWeight)
    })

    it('Validate font color', () => {
        cy.get(componentClass)
            .should('have.css', 'color')
            .and('eq', tokens.isSecondary.buttonFontColor)
    })

    it('Validate font size', () => {
        cy.get(componentClass)
            .should('have.css', 'font-size')
            .and('eq', tokens.isSecondary.buttonFontSize)
    })

    it('Validate typography', () => {
        cy.get(componentClass)
            .should('have.css', 'font-family')
            .and('eq', tokens.isSecondary.buttonFontFamily)
    })

    it('Validate button height', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('eq', tokens.isSecondary.buttonHeight)
    })

    it('Validate button padding - version 1.0', () => {
        cy.get(componentClass)
            .should('have.css', 'padding')
            .and('eq', tokens.isSecondary.buttonPadding)
    })

    it('Validate button padding - version 2.0', () => {
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

    it('Validate border-radius', () => {
        cy.get(componentClass)
            .should('have.css', 'border-radius')
            .and('eq', tokens.isSecondary.buttonBorderRadius)
    })

    it('Validate secondary button font color on double click', () => {
        cy.get(componentClass)
            .contains('Cadastrar')
            .dblclick({ force: true })
            .should('have.css', 'color')
            .and('eq', tokens.isSecondary.buttonFontColorDbClick)
    })

    it('Validate background color on double click', () => {
        cy.get(componentClass)
            .contains('Cadastrar')
            .dblclick({ force: true })
            .should('have.css', 'background-color')
            .and('eq', tokens.isSecondary.buttonBackgroundColorDbClick)
            .and('eq', 'rgb(38, 112, 232)')
    })
})

describe('Validate params of design for the component button on mobile aplicattion', () => {
    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.viewport('iphone-xr')
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate button min-width on mobile', () => {
        cy.get(componentClass)
            .should('have.css', 'width')
            .and('be.greaterThan', tokens.isMobile.buttonMobileMinWidth)
    })

})
