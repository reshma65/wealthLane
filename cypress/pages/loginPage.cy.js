export class LoginPage{

    
        username_textbox = '#userName'
        password_textbox = '#LoginInput_Password'
        login_button = '#submitLogin'
 
    login(username, password){
        cy.get(this.username_textbox).type(username)
        cy.get(this.password_textbox).type(password)
        cy.get(this.login_button).click()
    }
}

