/// <reference types="Cypress" />

const url = Cypress.config('baseUrl');
const dsComponenteUrl = 'components/button.html';
const componentClass = '.br-button.is-call-to-action';
const fileData = 'button.json';

describe('Validate params of design for the component button - call-to-action', () => {
	let tokens

	before(() => {
		cy.visit(dsComponenteUrl)
		cy.fixture(fileData).then((data) => {
			tokens = data
		})
	})

	it('Validate call-to-action button design color', () => {
		cy.get('.br-button.is-call-to-action')
			.should('have.css', 'color')
			.and('eq', tokens.isCallToAction.buttonFontColor)

		cy.get(componentClass)
			.should('have.css', 'background-color')
			.and('eq', tokens.isCallToAction.buttonFontColor)
	})

	it('Validate font weight', () => {
		cy.get(componentClass)
			.and('eq', tokens.isCallToAction.buttonFontWeight)
	})

	it('Validate font color', () => {
		cy.get(componentClass)
			.should('have.css', 'color')
			.and('eq', tokens.isCallToAction.buttonFontColor)
	})

	it('Validate font size', () => {
		cy.get(componentClass)
			.should('have.css', 'font-size')
			.and('eq', tokens.isCallToAction.buttonFontSize)
	})

	it('Validate button action border-radius', () => {
		cy.get(componentClass)
			.should('have.css', 'border-radius')
			.and('eq', tokens.isCallToAction.buttonBorderRadius)
	})

	it('Validate typography', () => {
		cy.get(componentClass)
			.should('have.css', 'font-family')
			.and('eq', tokens.isCallToAction.buttonFontFamily)
	})

	it('Validate button default height', () => {
		cy.get(componentClass)
			.should('have.css', 'height')
			.and('eq', tokens.isCallToAction.buttonHeight)
	})

	it('Validate button min-width', () => {
		cy.get(componentClass)
			.should('have.css', 'width')
			.and('eq', tokens.isCallToAction.buttonMinWidth)
	})

	it('Validate button padding', () => {
		cy.get(componentClass)
			.should('have.css', 'padding')
			.and('eq', tokens.isCallToAction.buttonPadding)
	})

	it('Validate button border', () => {
		cy.get(componentClass)
			.should('have.css', 'border')
			.and('eq', tokens.isCallToAction.buttonBorder)
	})

	it('Validate font color on double click', () => {
		cy.get(componentClass)
			.contains('Solicitar')
			.dblclick({ force: true })
			.should('have.css', 'color')
			.and('eq', tokens.isCallToAction.buttonFontColorDbClick)
			.and('eq', 'rgb(255, 255, 255)')
	})

	it('Validate background color on click', () => {
		cy.get(componentClass)
			.contains('Solicitar')
			.dblclick({ force: true })
			.should('have.css', 'background-color')
			.and('eq', tokens.isCallToAction.buttonBackgroundColorDbClick)
			.and('eq', 'rgb(54, 161, 145)')
	})

})

describe('Validate params of design for the component button on mobile aplicattion', () => {
	let tokens

	before(() => {
		cy.visit(dsComponenteUrl)
		cy.get(component).contains('Desenvolvedor').click()
		cy.fixture(fileData).then((data) => {
			tokens = data
		})
	})

	it('Validate button min-height on mobile', () => {
		cy.get(componentClass)
			.should('have.css', 'height')
			.and('be.greaterThan', tokens.isMobile.buttonMobileMinHeight)
	})

})
