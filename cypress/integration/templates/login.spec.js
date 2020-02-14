/// <reference types="Cypress" />

const dsComponenteUrl = 'templates/login.html';

describe('Validate params of design for the template login', () => {

    before(() => {
        cy.visit(dsComponenteUrl);
    });

    it('validate title page', () => {
        cy.get('.main-title').should('text', 'Acesse sua conta')
    })

    it('Validate user cadastro form', () => {
        cy.get('#cpf').type('98287028191')
        cy.get('#password').type('12345678')
        cy.get('#manter-logado').click({ force: true })
        cy.contains('Entrar').click()
        cy.contains('Cadastrar').click()
    });

})
