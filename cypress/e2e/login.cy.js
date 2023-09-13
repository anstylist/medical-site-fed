describe('User Login', () => {
  beforeEach(() => {
    cy.visit('https://localhost:5173/login')
  })

  it('should allow a user to log in', () => {
    cy.get('[data-cy=email-input]').type('johndoe@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('password123', { force: true })

    cy.get('[data-cy=login-button]').click({ force: true })

    cy.url().should('eq', 'https://localhost:5173/', { force: true })
  })

  it('should display an error message for incorrect credentials', () => {
    cy.get('[data-cy=email-input]').type('invalid@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('incorrectpassword', { force: true })

    cy.get('[data-cy=login-button]').click({ force: true })

    cy.get('body').should('contain', 'Invalid credentials')
  })
})
