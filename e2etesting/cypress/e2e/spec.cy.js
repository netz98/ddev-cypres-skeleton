// #ddev-generated
describe('example base url test', () => {
  it('passes', () => {
	  cy.request(Cypress.config('baseUrl')).then((response) => {
		  expect(response.status).to.eq(200)
	  })
  })
})
