describe('Actions on elements', function() {

    it('finds the element type', function() {
        cy.visit('https://example.cypress.io/')

        cy.pause()
        
        cy.contains('type').click()

        // Should be on a new URL which includes "/commands/actions"
        cy.url().should('include', '/commands/actions')

        //Get an input, type into it
        cy.get('#email1')
          .type('tes@gmail.com')
          .should('have.value', 'test@gmail.com')

        
    })

})