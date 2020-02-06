/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/button.html';
const componentClass = '.br-button.is-primary'
const fileData = 'button.json';

describe('Validate params of design for the component button - primary', () => {
    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate button design color primary', () => {
        cy.get(componentClass)
            .should('have.css', 'background-color')
            .and('eq', tokens.isPrimary.buttonBackgroundColor)
    })

    it('Validate button font weight', () => {
        cy.get(componentClass)
            .should('have.css', 'font-weight')
            .and('eq', tokens.isPrimary.buttonFontWeight)
    })

    it('Validate font color', () => {
        cy.get(componentClass)
            .should('have.css', 'color')
            .and('eq', tokens.isPrimary.buttonFontColor)
    })

    it('Validate font size', () => {
        cy.get(componentClass)
            .should('have.css', 'font-size')
            .and('eq', tokens.isPrimary.buttonFontSize)
    })

    it('Validate typography', () => {
        cy.get(componentClass)
            .should('have.css', 'font-family')
            .and('eq', tokens.isPrimary.buttonFontFamily)
    })

    it('Validate button default height', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('eq', tokens.isPrimary.buttonHeight)
    })

    it('Validate button min-width', () => {
        cy.get(componentClass)
            .should('have.css', 'width')
            .and('be.greaterThan', tokens.isPrimary.buttonMinWidth)
    })

    it('Validate button padding', () => {
        cy.get(componentClass)
            .should('have.css', 'padding')
            .and('eq', tokens.isPrimary.buttonPadding)
    })

    it('Validate border-radius', () => {
        cy.get(componentClass)
            .should('have.css', 'border-radius')
            .and('eq', tokens.isPrimary.buttonBorderRadius)
    })

    it('Validate font color on click', () => {
        cy.get(componentClass)
            .contains('Entrar')
            .dblclick({ force: true })
            .should('have.css', 'color')
            .and('eq', tokens.isPrimary.buttonFontColorDbClick)
    })

    it('Validate background color on click', () => {
        cy.get(componentClass)
            .contains('Entrar') // Está entrando no 'Entrar no gov.br'
            .dblclick({ force: true })
            .should('have.css', 'background-color')
            .and('eq', tokens.isPrimary.buttonFontColorClick)
    })

})

describe('Validate params of design for the component button on mobile aplicattion', () => {
    let tokens

    before(() => {
        cy.visit(dsComponenteUrl)
        cy.viewport('iphone-xr')
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate button min-height on mobile', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('be.greaterThan', tokens.isMobile.buttonMobileMinHeight)
    })

})

