describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('https://localhost:5173/register')
  })

  it('should allow a user to register', () => {
    cy.get('[data-cy=full-name-input]').type('John Doe', { force: true })
    cy.get('[data-cy=email-input]').type('johndoe4@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('password123', { force: true })
    cy.get('[data-cy=agree-terms-checkbox]').check({ force: true })

    cy.get('[data-cy=register-button]').click({ force: true })

    cy.get('body').should('contain', 'Registration Success', { force: true })
  })

  it('should display an error message for registration with an existing email', () => {
    cy.get('[data-cy=full-name-input]').type('Another User', { force: true })
    cy.get('[data-cy=email-input]').type('johndoe@example.com', { force: true })
    cy.get('[data-cy=password-input]').type('password456', { force: true })
    cy.get('[data-cy=agree-terms-checkbox]').check({ force: true })

    cy.get('[data-cy=register-button]').click({ force: true })

    cy.get('body').should('contain', 'There is a user already registered with this email.', { force: true })
  })
})
