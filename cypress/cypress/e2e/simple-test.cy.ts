describe('Simple UI suite', () => {
    it('Simple UI test which intended to fail', () =>{
        cy.visit('/')
          .title()
          .should('equal', 'Google');
    });
});
