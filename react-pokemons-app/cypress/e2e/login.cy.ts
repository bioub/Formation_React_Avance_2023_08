/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.get('input[name=username]').type('pikachu');

    // Compléter le password
    // Clicker sur le bouton
    // Vérifier que la page Pokédex s'affiche
  })
})
