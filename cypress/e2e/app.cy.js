describe('NY Times News Reader', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a title', () => {
    cy.contains('h1', "NY Times News Reader")
  })
})