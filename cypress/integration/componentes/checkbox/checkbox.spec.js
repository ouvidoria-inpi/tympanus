/// <reference types="Cypress" />

describe('Validate component checkbox', () => {

    before(() => {
        cy.visit('components/checkbox.html')
    })

    it('Validate standard checkbox color', () => {
        cy.get('.container-fluid > :nth-child(2) > label').contains('Padrão')
            .should('have.css', 'color')
            .and('eq', 'rgb(85, 85, 85)')
    })

    it('Validate standard checkbox font-family', () => {
        cy.get('.container-fluid > :nth-child(2) > label').contains('Padrão')
            .should('have.css', 'font')
            .and('eq', 'normal normal 500 normal 16px / 24px Rawline, Raleway, sans-serif')
    })

    it('Validate standart checkbox function select', () => {
        cy.get('#v-checkbox-default').check({ force: true })
    })

    // it('Validate standart checkbox function select All', () => {
    //     cy.get('[type="checkbox"]').check({ force: true })
    // })



})
