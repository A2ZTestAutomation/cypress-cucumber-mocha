const URL = 'http://zero.webappsecurity.com/index.html'
const USER_INPUT = '#user_login'
const PWD_INPUT = '#user_password'
const SIGNIN_BTN = '#signin_button'
const LOGIN_BTN = 'input[name="submit"]'

class LoginPage {
	static visitURL() {
		cy.visit(URL)
		cy.get(SIGNIN_BTN).click()
	}
	static userLogin(name, pwd) {
		cy.get(USER_INPUT).type(name)
		cy.get(PWD_INPUT).type(pwd)
		cy.get(LOGIN_BTN).click()
	}
	static fillUserName(name) {
		cy.get(USER_INPUT).type(name)
	}
	static fillPassword(pwd) {
		cy.get(PWD_INPUT).type(pwd)
	}
	static clickSubmitBtn() {
		cy.get(LOGIN_BTN).click()
	}
}

export default LoginPage
