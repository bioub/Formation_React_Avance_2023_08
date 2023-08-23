/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.get('input[name=username]').type('pikachu');
    cy.get('input[name=password]').type('pikachu');

    cy.get('button').click();

    cy.location('pathname').should('equal', '/pokemons');
  })
})
