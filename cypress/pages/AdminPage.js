class AdminPage {
    // 1. Initialize Selectors
    elements = {
        mainMenuItem: '.oxd-main-menu-item',
        addButton: 'button',
        inputGroup: '.oxd-input-group',
        dropdownText: '.oxd-select-text',
        dropdownOptions: '.oxd-select-dropdown',
        autocompleteOptions: '.oxd-autocomplete-dropdown',
        hintInput: 'input[placeholder="Type for hints..."]',
        submitButton: 'button[type="submit"]',
        passwordInput: 'input[type="password"]'
    }

    // 2. Actions using the elements object
    navigateToAdmin() {
        cy.get(this.elements.mainMenuItem).contains('Admin').click();
    }

    clickAddButton() {
        cy.contains(this.elements.addButton, 'Add').click();
    }

    searchUser(username, role, employeeName, status) {
        cy.contains(this.elements.inputGroup, 'Username').find('input').type(username);
        
        // User Role dropdown
        cy.contains(this.elements.inputGroup, 'User Role').find(this.elements.dropdownText).click();
        cy.get(this.elements.dropdownOptions).contains(role).click();

        // Employee Name hint
        cy.get(this.elements.hintInput).type(employeeName);
        cy.get(this.elements.autocompleteOptions).contains(employeeName).click();

        // Status dropdown
        cy.contains(this.elements.inputGroup, 'Status').find(this.elements.dropdownText).click();
        cy.get(this.elements.dropdownOptions).contains(status).click();

        cy.get(this.elements.submitButton).contains('Search').click();
    }

    fillUserDetail(role, employeeName, status, username, password) {
        // User Role
        cy.contains(this.elements.inputGroup, 'User Role').find(this.elements.dropdownText).click();
        cy.get(this.elements.dropdownOptions).contains(role).click();

        // Employee Name
        cy.contains(this.elements.inputGroup, 'Employee Name').find('input').type(employeeName);
        cy.wait(5000)
        cy.get(this.elements.autocompleteOptions).contains(employeeName).click();

        // Status
        cy.contains(this.elements.inputGroup, 'Status').find(this.elements.dropdownText).click();
        cy.get(this.elements.dropdownOptions).contains(status).click();

        // Username & Passwords
        cy.contains(this.elements.inputGroup, 'Username').find('input').type(username);
        cy.contains(this.elements.inputGroup, 'Password').find(this.elements.passwordInput).type(password);
        cy.contains(this.elements.inputGroup, 'Confirm Password').find(this.elements.passwordInput).type(password);
    }

    save() {
        cy.get(this.elements.submitButton).contains('Save').click();
    }
}

export default new AdminPage();