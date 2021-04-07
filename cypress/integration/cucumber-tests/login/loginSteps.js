import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
Given('User is on Login page', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#signin_button').click()
})

When('User enter username {string}', username => {
	cy.get('#user_login').type(username)
})

And('User enter password {string}', password => {
	cy.get('#user_password').type(password)
})
And('User click submit', () => {
	cy.get('input[name="submit"]').click()
})

Then('Should display home page', () => {
	cy.url().should('include', 'account-summary.html')
})

Then('Should display error message', () => {
    // cy.contains('Login and/or password are wrong.').should('be.visible')
    //Make it to fail
     cy.contains('Failed Login').should('be.visible')
    cy.log("Invalid credentials")
})
