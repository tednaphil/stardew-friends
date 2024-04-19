describe('Stardew Friends Error Handling', () => {
    it('Displays error message if server is down', () => {
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
        {
          statusCode: 500,
        }).as('getCharacters')
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/34',
        {
          statusCode: 500,
        }).as('getCharacter')
      .visit('http://localhost:3000/')
      .get('.error-message').contains('Error: We couldn\'t get the characters - 500')
      .visit('http://localhost:3000/characters/34')
      .get('.error-message').contains('Error: We couldn\'t get that character - 500')
    })

    it('Displays page not found message if bad path visited', () => {
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
        {
          statusCode: 200,
          fixture: 'characters'
        }).as('badGetCharacters')
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/badpath',
      {
        statusCode: 404,
      }).as('badGetCharacter')
      .visit('http://localhost:3000/badpath')
      .get('.error-message').contains('That page doesn\'t exist!')
      .visit('http://localhost:3000/characters/badpath')
      .get('.error-message').contains('Error: That character doesn\'t exist!')
    })
})