const URL = 'http://zero.webappsecurity.com/index.html'
const FEEDBACK_LINK = 'Feedback'
const NAME_IN = '#name'
const EMAIL_IN = '#email'
const SUB_IN = '#subject'
const COMMENT_IN = '#comment'
const SEND_BTN = 'input[name="submit"]'
class FeedbackPage {
	static visit() {
		cy.visit(URL)
		cy.contains(FEEDBACK_LINK).click()
	}
	static fillFeedbackDetails() {
		cy.get(NAME_IN).type('TestUser')
		cy.get(EMAIL_IN).type('test@email.com')
		cy.get(SUB_IN).type('Check Request')
		cy.get(COMMENT_IN).type('To send feedback on check request')
	}
	static clickSendButton() {
		cy.get(SEND_BTN).click()
	}
}
export default FeedbackPage
