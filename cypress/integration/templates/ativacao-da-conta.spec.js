/// <reference types="Cypress" />

const urlTemplate = 'templates/signin-1.html';

describe('Validate params of design for the template "Ativação de Conta"', () => {

    before(() => {
        cy.visit(urlTemplate)
    })

    it('get e-mail and celular fields, type a text and verify that the value has been updated', () => {
        cy.get('#radio-email').click({ force: true })
        cy.get('#email').click()
            .type('test@email.com')
            .should('have.value', 'test@email.com')

        cy.get('#radio-celular').click({ force: true })
        cy.get('#celular').click()
            .type('(61)12355656')
            .should('have.value', '(61)12355656')
    })

    it('get the user choice for "Receber Código por" radio button', () => {
        cy.get('#mensagem').click({ force: true })
        cy.get('#ligacao').click({ force: true })
    })

    it('get title tag and ensure it contains the text “Ative sua conta”.', () => {
        cy.get('title')
            .should('contain', 'Ative sua conta')
    })
})

describe('Validate params of design for the component button - tertiary - Cancelar', () => {

    it('Validate button design color font - Cancelar', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'color')
            .and('eq', 'rgb(85, 85, 85)')
    })

    it('Validate button underline font - Cancelar', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'text-decoration')
            .and('eq', 'underline solid rgb(85, 85, 85)')
    })

    it('Validate button font weight', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'font-weight')
            .and('eq', '600')
    })

    it('Validate font size', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'font-size')
            .and('eq', '16px')
    })

    it('Validate typography', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'font-family')
            .and('eq', 'Rawline, Raleway, sans-serif')
    })

    it('Validate button height', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'height')
            .and('eq', '44px')
    })

    it('Validate button padding', () => {
        cy.get('.br-button.is-cancel')
            .should('have.css', 'padding')
            .and('eq', '44px')
    })

    it('Validate Cancelar button font color on click', () => {
        cy.get('.br-button.is-cancel')
            .click({ force: true }).then(($btn) => {
                cy.get($btn).should('have.css', 'color')
                    .and('eq', 'rgb(38, 112, 232)')
            })
    })

})

describe('Validate params of design for the component button - primary - disabled', () => {

    it('Validate button design color primary', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(181, 207, 247)')
    })

    it('Validate button font weight', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'font-weight')
            .and('eq', '600')
    })

    it('Validate font color', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'color')
            .and('eq', 'rgb(255, 255, 255)')
    })

    it('Validate font size', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'font-size')
            .and('eq', '16px')
    })

    it('Validate typography', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'font-family')
            .and('eq', 'Rawline, Raleway, sans-serif')
    })

    it('Validate button default height', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'height')
            .and('eq', '44px')
    })

    it('Validate button min-width', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'width')
            .and('be.greaterThan', '153')
    })

    it('Validate button padding', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'padding')
            .and('eq', '44px')
    })

    it('Validate border-radius', () => {
        cy.get('.br-button.is-primary')
            .should('have.css', 'border-radius')
            .and('eq', '22px')
    })

})

