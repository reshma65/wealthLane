export class LogoutPage{
    logoutDropDown = '.sc-hHLeRK > :nth-child(2) > .material-symbols-rounded'
    //logout = 'input[class="para"]'

    logOut(){
        cy.get(this.logoutDropDown).click()
        cy.get('.sc-fLlhyt').click()
    }
}