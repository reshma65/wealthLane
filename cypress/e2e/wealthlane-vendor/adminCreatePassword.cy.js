import cc from "../../fixtures/createCompanyValues.json"
import { AdminCreatePasswordPage } from "../../pages/wealthlane-vendor/adminCreatePasswordPage.cy"

const adminCreatePasswordPage = new AdminCreatePasswordPage()



describe('Create Password of admin', function(){
    it('Open yopmail', function(){
        cy.visit('https://yopmail.com/')
        adminCreatePasswordPage.searchEmail(cc.adminEmail)
        cy.url().should('include','/wm')
    })
})