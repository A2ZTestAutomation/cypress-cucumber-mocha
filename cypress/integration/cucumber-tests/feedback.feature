Feature: Send Feedback as Message
    As a customer I want to send feedback.
    Scenario: Submit Feedback form
        Given  Open feedback form
        When Enter feedback details
        And Click  send message button
        # Use Common step to check url from common.js
        Then check 'sendFeedback.html' in the url
