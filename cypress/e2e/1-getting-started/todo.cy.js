 import { faker } from '@faker-js/faker';
 import LoginPage from '../../pages/LoginPage';
 import AdminPage from '../../pages/AdminPage';
 import MyInfoPage from '../../pages/MyInfoPage';


describe('Verify that User is able to login to ', () => {
beforeEach(() => {
   cy.loginViaCommand();
});

  it('Navigate to Admin Page', () => {
    // cy.get('.oxd-main-menu-item').contains('Admin') .click();
    AdminPage.navigateToAdmin();
    AdminPage.searchUser("Admin", "Admin", "Ravi", "Enabled");
})
  it.only('Add User', () => {
    // cy.get('.oxd-main-menu-item').contains('Admin') .click();
    AdminPage.navigateToAdmin();
    const randomUsername = faker.internet.username();
        
        // Use your POM method to fill the details
        AdminPage.clickAddButton()
        AdminPage.fillUserDetail('Admin', 'Orange Test', 'Enabled', randomUsername, 'Password123!');
        AdminPage.save();

    // cy.contains('button', 'Add').click();
    // cy.contains('.oxd-input-group', 'User Role').find('.oxd-select-text').click();
    // cy.get('.oxd-select-dropdown').contains('Admin').click();
    // cy.contains('.oxd-input-group', 'Employee Name').find('input[placeholder="Type for hints..."]').type('test kumar');
    // cy.get('.oxd-autocomplete-dropdown').contains('test kumar').click();
    // cy.get('.oxd-select-text').eq(1).click();
    // cy.get('.oxd-select-dropdown').contains('Enabled').click();
    // const randomUsername = faker.internet.username();
    // cy.contains('.oxd-input-group', 'Username').find('input').type(randomUsername);
    // cy.contains('.oxd-input-group', 'Password').find('input[type="password"]').type('Password123!');
    // cy.contains('.oxd-input-group', 'Confirm Password').find('input[type="password"]').type('Password123!');
    // cy.get('button[type="submit"]').contains('Save').click();
    
  
  
   
})

  it('should change the profile picture in My Info', () => {
    // cy.get('.oxd-main-menu-item').contains('My Info').click();
    // cy.get('.employee-image').click();
    // cy.get('input[type="file"]').selectFile('cypress/fixtures/Pictures/Cypressuse.png', { force: true });
    // cy.get('button[type="submit"]').contains('Save').click();

    MyInfoPage.navigateToMyInfo();
        MyInfoPage.uploadProfilePicture('cypress/fixtures/Pictures/Cypressuse.png');
        cy.contains('Successfully Updated').should('be.visible');
    });
    //cy.contains('Successfully Updated').should('be.visible');
    
// }); 
})
// })
