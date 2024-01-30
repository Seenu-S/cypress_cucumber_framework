const URL = 'https://signin.staging.storyful.com/trial/signup-form-01489905846464720243'
const FIRSTNAME_INPUT = '[id=first_name]'
const LASTNAME_INPUT = '[id=last_name]'
const EMAIL_INPUT = '[name=email]'
const PASSWORD_INPUT = '[name=password]'
const TC_CHECKBOX = '[name=terms]'
const SIGNUP_BUTTON = '[id=send]'
const COOKIES_BUTTON = '[id=hs-eu-confirmation-button]'

class SignupPage{
    // Visit the Sign Up Form
    static visitSignUpForm() {
        cy.visit(URL)
    }
    // Handle the cookies
    static handleCookies() {
        cy.get(COOKIES_BUTTON).click()
        }
    // Fill First Name
    static fillFirstName(firstname) {
        cy.get(FIRSTNAME_INPUT).type(firstname)
       // cy.wait(2000)
    }
    // Fill Last Name
    static fillLastName(lastname) {
        cy.get(LASTNAME_INPUT).focus().type(lastname)
    }
    // Fill invalid Email
    static fillEmail(email) {
        cy.get(EMAIL_INPUT).type(email)
    }
    // Fill random Email
    static randomEmail() {
        cy.get(EMAIL_INPUT).type(`${Date.now()}@test.com`) 
    }
    // Fill Password
    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }
    // Check Agree T&Cs checkbox
    static checkTC(){
        cy.get(TC_CHECKBOX).check()
        cy.wait(70000)
    }
    // Click Sign Up button
    static clickSignUp() {
        cy.get(SIGNUP_BUTTON).click()
    }
    // Valid
    static success() {
        cy.findByRole('heading', { name: 'I have an account' }).should(
			'be.visible',
		)
		cy.findByRole('button', { name: 'Sign in' }).should(
			'be.visible',
		)
    }
    // Email Validation
    static emailValidation() {
    cy.findByText('Invalid email address format').should('be.visible')
    }
    // Clear Email
    static clearEmailInput() {
    cy.get(EMAIL_INPUT).clear()
    }
    // Sign Up button enabled
    static signUpButtonEnabled() {
        cy.get(SIGNUP_BUTTON).should('not.be.disabled')
    }
    // Sign Up button disabled
    static signUpButtonDisabled() {
        cy.get(SIGNUP_BUTTON).should('be.disabled')
    }
}

export default SignupPage