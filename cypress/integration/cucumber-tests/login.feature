Feature: Login to Demo App
    As a invalid user I cannot login into application
    As a valid user  I want to login into application
    Scenario: Invalid Login
        Given User is on Login page
        When User enter username "invalid username"
        And User enter password "invalid password"
        And User click submit
        Then Should display error message

    #  @focus
    Scenario: Valid Login
        Given User is on Login page
        When User enter username "username"
        And User enter password "password"
        And User click submit
        Then Should display home page

