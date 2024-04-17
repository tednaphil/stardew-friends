describe('Stardew Friends Error Handling', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
          {
            statusCode: 500,
          }).as('getCharacters')
        cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/34',
          {
            statusCode: 500,
          }).as('getCharacter')
          .visit('https://stardew-friends.vercel.app/')
      })
      it('Displays error message if server is down', () => {
        //test home page content
        cy.visit('https://stardew-friends.vercel.app/characters/34')
        //test profile content

      })
      it('Displays page not found message if bad path visited', () => {
        cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
          {
            statusCode: 404,
          })
          cy.visit('https://stardew-friends.vercel.app/badpath')
        //test content
        cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/badpath',
          {
            statusCode: 404,
          })
        cy.visit('https://stardew-friends.vercel.app/characters/badpath')
        //test content

      })
})