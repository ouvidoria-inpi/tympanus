/// <reference types="Cypress" />

const dsComponenteUrl = 'components/accordeon.html';

describe('Validate params of design for the component button - primary', () => {
    let tokens;

    before(() => {
        cy.visit(dsComponenteUrl);
        cy.fixture('accordeon.json').then((data) => {
            tokens = data;
        });
    });

    it('Validate accordeon design color', () => {
        cy.get('.br-accordeon .header').should('have.css', 'color').and('eq', tokens.colorTitle);
    });

    it('Validate accordeon design font-weight', () => {
        cy.get('.br-accordeon .header .title').should('have.css', 'font-weight').and('eq', tokens.fontWeight);
    });

    it('Validate accordeon click options', () => {
        cy.get('.icon').click({ multiple: true })
    });

    it('Validate color icon options accordeon', () => {
        cy.get('.br-accordeon .icon')
            .should('have.css', 'color')
            .and('eq', 'rgb(19, 81, 180)')
    })

    it('Validate border accordeon', () => {
        cy.get('.br-accordeon .item')
            .should('have.css', 'border-bottom')
            .and('eq', '1px solid rgb(204, 204, 204)')
    })

})
