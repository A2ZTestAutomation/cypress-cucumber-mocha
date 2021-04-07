// import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
 import LoginPage from './loginPage'

Given('User is on Login page', () => {
	LoginPage.visitURL()
})
 
When('User enter username {string}', username => {
	LoginPage.fillUserName(username)
})

And('User enter password {string}', password => {
	LoginPage.fillPassword(password)
})
And('User click submit', () => {
	LoginPage.clickSubmitBtn()
})

Then('Should display home page', () => {
	cy.url().should('include', 'account-summary.html')
})

Then('Should display error message', () => {
	//  cy.contains('Login and/or password are wrong.').should('be.visible')
	cy.contains('Wron login').should('be.visible')
})
