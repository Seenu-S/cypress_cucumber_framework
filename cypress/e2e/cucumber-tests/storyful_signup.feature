Feature: Sign Up into Newswire by Storyful Application

    As a valid user
    I want to Sign Up on to the Newswire by Storyful Application
    As an invalid user
    I cannot Sign Up on to the Newswire by Storyful Application

    Background:
    Given Open the Sign Up form

    Scenario: Valid Sign Up
    When I handle the cookies
    And I enter the First Name as 'Test'
    And I enter the Last Name as 'Sign up'
    And I enter the Email
    And I enter the Password as '12345Qaz!'
    And I check the Agree T&Cs checkbox
    Then I click the Trial Sign Up button
    And Verify user is navigated to Sign In page

    Scenario: Invalid Email
    When I handle the cookies
    And I enter the invalid Email as 'storyful_test2'
    Then Verify Email validation message

    Scenario: Incomplete form
    When I handle the cookies
    And I enter the First Name as 'Test'
    And I enter the Last Name as 'Sign up'
    And I enter the Email as 'storyful_test2@gmail.com'
    And I enter the Password as '12345Qaz!'
    And I check the Agree T&Cs checkbox
    Then Trial Sign Up button gets enabled
    When I clear the Email
    Then Trial Sign Up button gets disabled