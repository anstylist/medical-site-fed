describe('User Login', () => {
  beforeEach(() => {
    cy.visit('https://mebid-site.vercel.app/login')
  })

  it('should allow a user to log in', () => {
    cy.get('[data-cy=email-input]').type('johndoe4@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('password123', { force: true })

    cy.get('[data-cy=login-button]').click({ force: true })

    cy.url().should('eq', 'https://mebid-site.vercel.app/', { force: true })
  })

  it('should display an error message for incorrect credentials', () => {
    cy.get('[data-cy=email-input]').type('invalid@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('incorrectpassword', { force: true })

    cy.get('[data-cy=login-button]').click({ force: true })

    cy.get('body').should('contain', 'Error')
  })
})
