describe('OrangeHRMLogin', function() {

    it('Le panneau LOGIN doit apparaître quand on ouvre l\'URL', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#frmLogin').contains('LOGIN')
    })

})
