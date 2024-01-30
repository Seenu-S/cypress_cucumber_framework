import {
    Given,
    When,
    Then,
    And,
} from 'cypress-cucumber-preprocessor/steps'
import SignupPage from '../../pages/signupPage'

Given('Open the Sign Up form', () => {
    SignupPage.visitSignUpForm()
})

When('I handle the cookies', () => {
    SignupPage.handleCookies()
})

And('I enter the First Name as {string}', (firstname) => {
    SignupPage.fillFirstName(firstname)
})

And('I enter the Last Name as {string}', (lastname) => {
    SignupPage.fillLastName(lastname)
})

And('I enter the Email as {string}', (email) => {
    SignupPage.fillEmail(email)
})

And('I enter the Password as {string}', (password) => {
    SignupPage.fillPassword(password)
})

And('I check the Agree T&Cs checkbox', () => {
    SignupPage.checkTC()
})

Then('I click the Trial Sign Up button', () => {
    SignupPage.clickSignUp()
})

And('Verify user is navigated to Sign In page', () => {
    SignupPage.success()
})

And('I enter the invalid Email as {string}', (email) => {
        SignupPage.fillEmail(email)
})

Then('Verify Email validation message', () => {
    SignupPage.emailValidation()
})

When('I handle the cookies', () => {
    SignupPage.clearEmailInput()
})

Then('Trial Sign Up button gets enabled', () => {
    SignupPage.signUpButtonEnabled()
})

And('I clear the Email', () => {
    SignupPage.clearEmailInput()
})

Then('Trial Sign Up button gets disabled', () => {
    SignupPage.signUpButtonDisabled()
})

And('I enter the Email', () => {
    SignupPage.randomEmail()
})


