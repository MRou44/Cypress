describe('Site cypress.io', function() {

    beforeEach(function() {
        cy.visit('https://www.cypress.io')       
    })

    it('open in browser', function() {
        //cy.screenshot()
    })

    it('open in iphone 8', function() {
        cy.viewport('iphone-8')
        //cy.screenshot()
    }) 
    
    it('open in mobiles', function() {
        cy.viewport('iphone-x')
        //cy.screenshot()
        cy.viewport('macbook-16')
        //cy.screenshot()
        cy.viewport('samsung-note9')
    })


})