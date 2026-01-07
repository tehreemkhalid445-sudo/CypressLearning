
//
Cypress.Commands.add('loginViaCommand', (
  // Default values are pulled from environment variables
  username = Cypress.env('orangeHRM_username'), 
  password = Cypress.env('orangeHRM_password')
) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    // Using simple selectors as per your spec file style
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })