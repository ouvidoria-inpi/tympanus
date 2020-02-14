/// <reference types="Cypress" />

const URL = 'https://dsgov.estaleiro.serpro.gov.br/ds/componentes/form'

describe('Validate params of design for component form', () => {

    before(() => {
        cy.visit(`${URL}`)
        //cy.get('button').contains('Desenvolvedor').click()
    })

    it('get input fields, type a text and verify that the value has been updated', () => {
        cy.get('input[type = text]').then(els => {
            [...els].forEach(el => {
                cy.wrap(el).type('lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus')
                    .should('have.value', 'lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus')
            })
        });
    })

    it('get text-area field, type a text and verify that the value has been updated', () => {
        cy.get('#item-textarea')
            .type('lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus suscipit class nibh odio sapien a facilisis molestie condimentum lacinia non cras aenean phasellus gravida magna commodo maecenas ultrices integer hac')
            .should('have.value', 'lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus suscipit class nibh odio sapien a facilisis molestie condimentum lacinia non cras aenean phasellus gravida magna commodo maecenas ultrices integer hac')
    })

    it('get checkbox fields and check/uncheck', () => {
        cy.get('input[type = checkbox]').then(els => {
            [...els].forEach(el =>
                cy.wrap(el).click({ force: true })
            )
        });
    })

    it('get radio buttons and click on it', () => {
        cy.get('input[type = radio]').then(els => {
            [...els].forEach(el =>
                cy.wrap(el).click({ force: true })
            )
        });
    })

})
