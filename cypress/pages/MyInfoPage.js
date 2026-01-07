class MyInfoPage {
    // 1. Initialize Selectors
    elements = {
        mainMenuMyInfo: '.oxd-main-menu-item',
        profileImage: '.employee-image',
        fileInput: 'input[type="file"]',
        saveButton: 'button[type="submit"]'
    }

    // 2. Actions using the elements object
    navigateToMyInfo() {
        cy.get(this.elements.mainMenuMyInfo).contains('My Info').click();
    }

    uploadProfilePicture(filePath) {
        // Click the profile image to open the upload section
        cy.get(this.elements.profileImage).click();

        // Select the file from your fixtures
        cy.get(this.elements.fileInput).selectFile(filePath, { force: true });

        // Click the save button
        cy.get(this.elements.saveButton).contains('Save').click();
    }
}

export default new MyInfoPage();