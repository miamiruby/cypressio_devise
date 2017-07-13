describe('Pages', function(){

  beforeEach(function(){

    //cy.exec('rake db:test:prepare && rake db:seed')
    //cy.exec('gem install rake && bundle install && bundle exec rake db:seed').its('code').should('eq', 0)
    cy.exec('RAILS_ENV=test bundle exec rake db:seed').its('code').should('eq', 0)

    cy.visit('/')
  })

  it('cy.should - assert that <title and h1> are correct', function(){

    cy.title().should('include', 'Cypress Test App')

    cy.get('h1').should('contain', 'Welcome to Cypress Test App')
  })

  it('should have a moo page', function(){

    cy.visit('/moo')

    cy.title().should('include', 'Cypress Test App')

    cy.get('h1').should('contain', 'Moo')
  })

})
