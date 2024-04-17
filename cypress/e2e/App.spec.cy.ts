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
    .visit('http://localhost:3000/')
    //set viewport size if needed after css refactor
  })
  it('Displays Homepage', () => {
    cy.get('.loading-screen').contains('h2', 'Loading...')
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
  it('Shows individual character profile', () => {
    cy.get('.card-wrapper').last().click()
    .get('.nav-bar').children().should('have.length', 2)
    .get('.hero-wrapper').contains('h2', 'Wizard')
    .get('.profile-avatar').should('have.attr', 'alt').should('equal', 'Wizard avatar')
    .get('.bestie-button').should('exist')
    .get('.profile-details').children().should('have.length', 6)
    .get('.profile-details').contains('h3', 'Birthday')
    .get('.birthday').contains('p', 'Winter 17')
    .get('.profile-details').contains('h3', 'Hobbies')
    .get('.hobby').first().contains('p', 'alchemy')
    .get('.hobby').last().contains('p', 'divination')
    .get('.profile-details').contains('h3', 'Loved Gifts')
    .get('.gift').first().contains('p', 'Book of Mysteries')
    .get('.gift').last().contains('p', 'Void Essence')
  })
  it('Adds, increments, and removes besties', () => {
    cy.get('.card-wrapper').last().click()
    .get('.bestie-button').click()
    .get('.remove-button').should('exist')
    .get('#besties-link').click()
    // .get('#besties-link').contains('1')
    .get('.bestie-count').contains('You have 1 bestie!')
    .get('.bestie-avatar').should('have.attr', 'alt').should('equal', 'Wizard avatar')
    .get('.name').contains('Wizard')
    .get('.profile-link').contains('View Profile')
    .get('.friendship-label').contains('Friendship Level')
    .get('.incrementer').children().should('have.length', 3)
    .get('.incrementer').contains('p', '0')
    .get('#up').click().click()
    .get('.incrementer').contains('p', '2')
    .get('#down').click()
    .get('.incrementer').contains('p', '1')
    .get('.profile-link').click()
    .get('.remove-button').click()
    .get('.bestie-button').should('exist')
    .get('#besties-link').click()
    .get('.bestie-count').contains('You don\'t have any besties :(')
  })

  it('Displays search results', () => {
    cy.get('.search-bar').type('wi').should('have.value', 'wi')
    .get('.character-cards').children().should('have.length', 2)
    .get('.card-wrapper').first().contains('p', 'Willy')
    .get('.char-avatar').first().should('have.attr', 'alt').should('equal', 'Willy avatar')
    .get('.card-wrapper').last().contains('p', 'Wizard')
    .get('.char-avatar').last().should('have.attr', 'alt').should('equal', 'Wizard avatar')
  })
})