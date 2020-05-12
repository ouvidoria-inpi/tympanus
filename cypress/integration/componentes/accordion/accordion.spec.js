/// <reference types="Cypress" />

const dsComponenteUrl = 'components/accordion.html';

describe('Validate params of design for the component accordion - primary', () => {
    let tokens;

    before(() => {
        cy.visit(dsComponenteUrl);
        cy.fixture('accordion.json').then((data) => {
            tokens = data;
        });
    });

    it('Validate accordion design color', () => {
        cy.get('.br-accordion .header').should('have.css', 'color').and('eq', tokens.colorTitle);
    });

    it('Validate accordion design font-weight', () => {
        cy.get('.br-accordion .header .title').should('have.css', 'font-weight').and('eq', tokens.fontWeight);
    });

    it('Validate accordion click options', () => {
        cy.get('.icon').click({ multiple: true })
    });

    it('Validate color icon options accordion', () => {
        cy.get('.br-accordion .icon')
            .should('have.css', 'color')
            .and('eq', 'rgb(19, 81, 180)')
    })

    it('Validate border accordion', () => {
        cy.get('.br-accordion .item')
            .should('have.css', 'border-bottom')
            .and('eq', '1px solid rgb(204, 204, 204)')
    })

})
