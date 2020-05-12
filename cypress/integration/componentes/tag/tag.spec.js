/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/tag.html';
const componentClass = '.br-tag'
const fileData = 'tag.json';

describe('Validate params of design for the component tag', () => {
    let tokens

    beforeEach(() => {
        cy.visit(dsComponenteUrl)
        cy.fixture(fileData).then((data) => tokens = data)
    })

    it('Validate font color', () => {
        cy.get(componentClass)
            .should('have.css', 'color')
            .and('eq', tokens.textFontColor)
    })

    it('Validate background color', () => {
        cy.get(componentClass)
            .should('have.css', 'background-color')
            .and('eq', tokens.bgColor)
    })

    it('Validate font weight', () => {
        cy.get(componentClass)
            .should('have.css', 'font-weight')
            .and('eq', tokens.textFontWeight)
    })

    it('Validate font size', () => {
        cy.get(componentClass)
            .should('have.css', 'font-size')
            .and('eq', tokens.textFontSize)
    })

    it('Validate border-radius', () => {
        cy.get(componentClass)
            .should('have.css', 'border-radius')
            .and('eq', tokens.borderRadius)
    })

    it('Validate typography', () => {
        cy.get(componentClass)
            .should('have.css', 'font-family')
            .and('eq', tokens.textFontFamily)
    })

    it('Validate tag height', () => {
        cy.get(componentClass)
            .should('have.css', 'height')
            .and('eq', tokens.height)
    })

    it('Validate tag border', () => {
        cy.get(componentClass)
            .should('have.css', 'border')
            .and('eq', tokens.border)
    })

    it('Validate padding right and left of an entire tag', () => {
        cy.get(componentClass)
            .should('have.css', 'padding')
            .and('eq', tokens.padding)
    })

    it('Validate padding-right on icon', () => {
        cy.get(componentClass)
            .find('.content [class*="fa-"]')
            .should('have.css', 'margin-right')
            .and('eq', tokens.iconPaddingRight)
    })

    it('Validate if button close exists when tag is tag-input-close', () => {
        cy.get(componentClass)
            .find('.close')
            .parent('.tag-input-close')
    })
    /*
        it('Validate padding-left on button close', () => {
            cy.get(componentClass)
                .find('.close')
                .parent('.tag-input-close')
                .should('have.css', 'padding-left')
                .and('eq', tokens.btnClosePaddingLeft)
        })
    */
    it('Validate button close color on tag is-start-close', () => {
        cy.get(componentClass)
            .find('.close')
            .children('button[type=button]')
            .should('have.css', 'color')
            .and('eq', tokens.btnCloseColor)
    })

    it('Validate opacity color on disabled tag', () => {
        cy.get(componentClass)
            .closest('.disabled')
            .should('have.css', 'opacity')
            .and('eq', tokens.disabled)
    })

    it('Get input field, type a text and press ENTER', () => {
        cy.get('.input-tag')
            .type('lorem ipsum dolor{enter}', {
                force: true
            })
    })
    /*
    it('Validate font color on click', () => {
        cy.get(componentClass)
            .find('.close')
            .parent('.tag-input-close')
            .trigger('mousedown', {
                button: 0
            })
            .wait(10000)
            .should('have.css', 'color')
            .and('eq', tokens.textFontColorOnClick)
            .trigger('mouseup', {
                button: 0
            })

        //.trigger('mouseenter').then(($btn) => {
        //    cy.get($btn).should('have.css', 'color')
        //        .and('eq', tokens.textFontColorOnClick)
        //})
    })




        it('Validate background color on click', () => {
            cy.get(componentClass)
                .find('.close')
                .parent('.is-start-close')
                .click({ force: true })
                .should('have.css', 'background-color')
                .and('eq', tokens.bgColorOnClick)
        })

        it('Validate button close color on click', () => {
            cy.get(componentClass)
                .find('.close')
                .children( 'button[type=button]')
                .click({ force: true })
                .should('have.css', 'color')
                .and('eq', tokens.btnCloseColorOnClick)
        })
    */
})
