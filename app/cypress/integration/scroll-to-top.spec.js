/// <reference types="cypress" />

describe('scroll-to-top', () => {

    beforeEach(() => {
        cy.visit('../../scroll-to-top.html')
    })

    // 3.2
    it('should scroll to bottom', () => {
        cy.dataCy('scroll-button').click();
        cy.dataCy('show-bottom').should('be.visible');
    });

    // 3.3
    it('should scroll to top', () => {
        //cy.get('body').scrollTo('top');
        cy.dataCy('scroll-button').click();
        cy.dataCy('show-bottom').should('be.visible');
        cy.scrollTo('top');
        cy.dataCy('scroll-button').should('be.visible');
    });

});