describe('Login', function(){

  beforeEach(function(){

    //cy.exec('rake db:test:prepare && rake db:seed')
    //cy.exec('gem install rake && bundle install && bundle exec rake db:seed').its('code').should('eq', 0)
    //cy.exec('RAILS_ENV=test bundle exec rake db:test:prepare').its('code').should('eq', 0)

  })

  it('cy.register should create a user', function(){
    cy.visit('/')

    cy.register()
    cy.logout()
    cy.login()

  })


})
