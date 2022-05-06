/// <reference types="cypress" />

describe('modal', () => {

    beforeEach(() => {
        cy.visit('../../modal.html')
    })

    // 2.2
    it('should display lorem ipsus', () => {
        cy.dataCy('display-modal').click();
        cy.dataCy('lorem-ipsum').should('be.visible');
    });

    // 2.3
    it('should leave lorem ipsus', () => {
        cy.dataCy('display-modal').click();
        cy.dataCy('lorem-ipsum').should('be.visible');

        cy.dataCy('leave-lorem-ipsus').click();
        //cy.get('body').click(0,0);
        cy.dataCy('lorem-ipsum').should('not.be.visible');
    });

    // 3.3
    it('should check if contains <h2></h2>', () => {
        cy.dataCy('display-modal').click();
        cy.dataCy('lorem-ipsum').should('be.visible');
        cy.contains('h2', 'Lorem Ipsum')
    });

});
