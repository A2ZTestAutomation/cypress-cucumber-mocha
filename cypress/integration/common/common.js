import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('wait for {int} milliseconds', time => {
	cy.wait(time)
})
defineStep('launch the given url  {string}', url => {
	cy.visit(url)
})
defineStep('check the {string} of the page', title => {
	cy.title().should('include', title)
})
defineStep('check {string} in the url', url => {
	cy.url().should('include', url)
})
defineStep('reload the browser', () => {
	cy.reload()
})
