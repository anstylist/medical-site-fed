describe('Appointment', () => {
  beforeEach(() => {
    // Visit the login page and log in
    cy.visit('https://localhost:5173/login')
    cy.get('[data-cy=email-input]').type('juanvj0425@gmail.com', { force: true })
    cy.get('[data-cy=password-input]').type('1234', { force: true })
    cy.get('[data-cy=login-button]').click({ force: true })
    cy.url().should('eq', 'https://localhost:5173/admin', { force: true })
  })

  it('should allow a user to make an appointment', () => {
    cy.visit('https://localhost:5173/appointment')

    cy.get('[data-cy=phone]').type('1234567890', { force: true })
    cy.get('[data-cy=nationality]').select('Colombia', { force: true })
    cy.get('[data-cy=birthDate]').type('1990-01-15', { force: true })
    cy.get('[data-cy=rh]').select('O-', { force: true })
    cy.get('[data-cy=gender]').check('MALE', { force: true })

    cy.get('[data-cy=speciality-select]').select('Neurology', { force: true })
    cy.get('[data-cy=doctor-select]').select('Wynn Blazek', { force: true })
    cy.get('[data-cy=hospital-select]').select('Augu Hospital', { force: true })
    cy.get('[data-cy=appointment-date-input]').type('2023-12-31T12:00', { force: true })
    cy.get('[data-cy=message-textarea]').type('I need a consultation.', { force: true })

    cy.get('[data-cy=submit-button]').click({ force: true })

    cy.get('body').should('contain', 'Medical Appointment Scheduled', { force: true })
  })
})
