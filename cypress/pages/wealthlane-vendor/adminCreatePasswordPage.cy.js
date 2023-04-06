

export class AdminCreatePasswordPage{

searchBar = '#login'
enterButton = '#refreshbut > .md > .material-icons-outlined'
loginToYourAccountButton = "a[href='https://wealthlane-auth.server247.info/Account/PasswordChange']"

searchEmail(email){
    cy.get(this.searchBar).type(email)
    cy.get(this.enterButton).click()
     cy.get('a:contains("Login to Your Account")').click()

}

}