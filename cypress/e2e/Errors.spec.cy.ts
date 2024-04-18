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
      //should i replace these urls with deployed link again once suite completed?
      .get('.error-message').contains('Error: We couldn\'t get the characters - 500')
      .visit('http://localhost:3000/characters/34')
      .get('.error-message').contains('Error: We couldn\'t get that character - 500')
    })

    it('Displays page not found message if bad path visited', () => {
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters',
        {
          statusCode: 404,
        }).as('badGetCharacters')
      cy.intercept('GET', 'https://stardew-api.onrender.com/api/v1/characters/badpath',
      {
        statusCode: 404,
      }).as('badGetCharacter')
      .visit('http://localhost:3000/badpath')
      // .wait('@badGetCharacters')
      //check url
      .get('.error-message').contains('That page doesn\'t exist') //why is this test blinking?
      .visit('http://localhost:3000/characters/badpath')
      .get('.error-message').contains('Error: We couldn\'t get that character - 404')
    })
})