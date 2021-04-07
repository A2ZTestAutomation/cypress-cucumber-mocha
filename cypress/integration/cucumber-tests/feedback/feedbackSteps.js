import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('Open feedback form', () => {
	FeedbackPage.visit()
})
When('Enter feedback details', () => {
	FeedbackPage.fillFeedbackDetails()
})
And('Click  send message button', () => {
	FeedbackPage.clickSendButton()
})
