describe('OrangeHRMComplete', function() {

    context('OrangeHRM', function() {
        beforeEach(function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            //cy.viewport(1280, 800)
            //cy.viewport('iphone-xr')
        })

        it('Le panneau LOGIN doit apparaître quand on ouvre l\'URL', function() {
            cy.get('#frmLogin').contains('LOGIN Panel')
        })
              
    })

})
