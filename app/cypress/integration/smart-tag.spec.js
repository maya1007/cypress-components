/// <reference types="cypress" />

describe('smart-tag', () => {

    beforeEach(() => {
        cy.visit('../../smart-tag.html')
    })

    // 3.2
    it('should show tag information', () => {
        cy.dataCy('tag').trigger('mouseover');
        cy.dataCy('tag-test').should('be.visible');
    });


    // 3.3
    it('should leave inforation of the tag', () => {
        cy.dataCy('tag').trigger('mouseover');
        cy.dataCy('tag-test').should('be.visible');
        cy.get('body').trigger('mouseover',0,0);
        cy.get('tag-test').should('be.not.visible');
     });

    


});