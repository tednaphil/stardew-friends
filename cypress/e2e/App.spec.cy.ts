describe('Stardew Friends User Stories', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
      {
        statusCode: 200,
        fixture: 'characters'
      }).as('getCharacters')
  })
  it('Displays Homepage', () => {
    cy.visit('https://stardew-friends.vercel.app/')
    .wait('@getCharacters')
    //check loaded content
  })
})