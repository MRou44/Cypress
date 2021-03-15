/* describe('Demo automation with fixtures', function() {

    it('Sign in', function() {
    
        cy.visit('https://shop.demoqa.com/my-account/')

        cy.fixture('userLoginDetails').then(function(user) {
            cy.get('#reg_username').type(user.username)
            cy.get('#reg_email').type(user.email)
            cy.get('#reg_password').type(user.password) 
        })

        cy.get('.woocommerce-Button').click()
        
    })

}) */

/* describe('Demo automation with fixtures', function() {

    let userDetails

    beforeEach(function() {
        cy.fixture('userLoginDetails').then(function(user) {
            userDetails = user
        })
    })

    it('Sign in', function() {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(userDetails.username)
        cy.get('#reg_email').type(userDetails.email)
        cy.get('#reg_password').type(userDetails.password)
        cy.get('.woocommerce-Button').click()
    })
}) */

describe('Demo automation with fixtures', function() {

    beforeEach(function() {
        cy.fixture('userLoginDetails').as('user')
    })

    it('Sign in', function() {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get('#reg_username').type(this.user.username)
        cy.get('#reg_email').type(this.user.email)
        cy.get('#reg_password').type(this.user.password)
        cy.get('.woocommerce-Button').click()
    })
})