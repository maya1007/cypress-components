/// <reference types="cypress" />

describe('index', () => {

    beforeEach(() => {
        cy.visit('../../todo.html')
    })

    // 4.2
    it('should ', () => {
        cy.dataCy('type-task').type('1').should('have.value', "1");  
        cy.dataCy('add-task').click();
        cy.dataCy('todo-content-0').should('have.text',1);

        cy.dataCy('type-task').type('2').should('have.value', "2");
        cy.dataCy('add-task').click();
        cy.dataCy('todo-content-1').should('have.text',2);

        cy.dataCy('type-task').type('3').should('have.value', "3");
        cy.dataCy('add-task').click();
        cy.dataCy('todo-content-2').should('have.text',3);

        cy.dataCy('type-task').type('4').should('have.value', "4");
        cy.dataCy('add-task').click();
        cy.dataCy('todo-content-3').should('have.text',4);

        cy.dataCy('todo-delete-1').click();
        cy.dataCy('check-length').should('have.text',3);

        
    });
});

