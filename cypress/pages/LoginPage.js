class LoginPage {
    elements = {
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        loginBtn: 'button[type="submit"]'
    }

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.viewport(1280, 720);
    }

    login(username, password) {
        cy.get(this.elements.usernameInput).type(username);
        cy.get(this.elements.passwordInput).type(password);
        cy.get(this.elements.loginBtn).click();
    }
}

export default new LoginPage();