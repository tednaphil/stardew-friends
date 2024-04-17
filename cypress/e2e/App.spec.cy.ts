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
    cy.visit('https://stardew-friends.vercel.app/')
    .wait('@getCharacters')
    //check loaded content
  })
  it('Shows individual character profile', () => {
    //click character from homepage
    //check content
  })
  it('Adds and removes besties', () => {
    //add bestie from character profile
    //check besties view
    //remove bestie
    //check bestie view

  })
  it('Displays search results', () => {
    //check value of search input
    //type search
    //check displayed results

  })
})