describe('visit home and click on a product', () => {
    it('passes', () => {
      //TODO: this shoud be configurable
      cy.visit('https://weinerlebnis.ddev.site')
  
      
      //define a product
      //TODO: this should be fetched from api or at least configurable
      const someWine = 'Karl Pfaffmann'
  
      //execute a navigation
      cy.contains(someWine).click()
  
      //check if the navigation is succesfull
      cy.url().should('include', someWine.toLocaleLowerCase().replace(' ', '-'))
    })
  })