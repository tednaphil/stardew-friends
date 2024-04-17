describe('Stardew Friends User Stories', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
      {
        statusCode: 200,
        fixture: 'characters'
      }).as('getCharacters')
    cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/34',
      {
        statusCode: 200,
        fixture: 'character'
      }).as('getCharacter')
  })
  it('Displays Homepage', () => {
    cy.visit('http://localhost:3000/')
    .get('.loading-screen').contains('h2', 'Loading...')
    .get('.loading-image').should('have.attr', 'src')/*.should('include', 'data:image/gif')*/
    .wait('@getCharacters')
    .get('.nav-bar').children().should('have.length', 3)
    .get('.heading').contains('Stardew Friends')
    .get('.links').contains('a', 'Home')
    .get('.links').contains('a', 'Besties')
    .get('.search-bar').should('exist')
    .get('.character-cards').children().should('have.length', 4)
    .get('.card-wrapper').first().contains('p', 'Sandy')
    .get('.char-avatar').first().should('have.attr', 'alt').should('equal', 'Sandy avatar')
    .get('.card-wrapper').last().contains('p', 'Wizard')
    .get('.char-avatar').last().should('have.attr', 'alt').should('equal', 'Wizard avatar')
  })
  // it('Shows individual character profile', () => {
  //   //click character from homepage
  //   //check content
  // })
  // it('Adds and removes besties', () => {
  //   //add bestie from character profile
  //   //check besties view
  //   //remove bestie
  //   //check bestie view
  // })
  // it('Increments frienship level', () => {

  // })

  // it('Displays search results', () => {
  //   //check value of search input
  //   //type search
  //   //check displayed results

  // })
})