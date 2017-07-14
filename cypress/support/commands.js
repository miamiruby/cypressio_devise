// ***********************************************
// This example commands.js shows you how to
// create the custom command: 'login'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/api/commands
// ***********************************************
//
Cypress.addParentCommand("logout", function(){
   cy
     .visit("/users/logout", {log: false})
     .get(".notice", {log: false}).contains("Signed out successfully.", {log: false}) //we should be on the dashboard now
})

Cypress.addParentCommand("login", function(email, password){
  var email    = email || "demo@demo.com"
  var password = password || "password"

  var log = Cypress.Log.command({
    name: "login",
    message: [email, password],
    consoleProps: function(){
    return {
      email: email,
      password: password
    }
    }
  })

   cy
     .visit("/users/login", {log: false})
     .get('h2').contains("Log in", {log: false})
     .get("#user_email", {log: false}).type(email, {log: false})
     .get("#user_password", {log: false}).type(password, {log: false})
     .get('#new_user').submit()
     //.get("button", {log: false}).click({log: false}) //this should submit the form
     .get(".notice", {log: false}).contains("Signed in successfully.", {log: false}) //we should be on the dashboard now
     //.url({log: false}).should("match", /dashboard/, {log: false})
     .then(function(){
       log.snapshot().end()
     })
})

Cypress.addParentCommand("register", function(email, password){
  var email    = email || "demo@demo.com"
  var password = password || "password"

  var log = Cypress.Log.command({
    name: "register",
    message: [email, password],
    consoleProps: function(){
    return {
      email: email,
      password: password
    }
    }
  })

   cy
     .visit("/users/register", {log: false})
     .contains("Sign up", {log: false})
     .get("#user_email", {log: false}).type(email, {log: false})
     .get("#user_password", {log: false}).type(password, {log: false})
     .get("#user_password_confirmation", {log: false}).type(password, {log: false})
     .get('#new_user').submit()
     //.get("button", {log: false}).click({log: false}) //this should submit the form
     .get(".notice", {log: false}).contains("Welcome! You have signed up successfully.", {log: false}) //we should be on the dashboard now
     .url({log: false}).should("match", /dashboard/, {log: false})
     .then(function(){
       log.snapshot().end()
     })
})
