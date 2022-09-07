

describe('empty spec', () => {
  it('Site visited successfully', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="header-navlist-icon-container"]');
  })
})