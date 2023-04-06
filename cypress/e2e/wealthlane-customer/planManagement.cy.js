import { LoginPage } from "../../pages/loginPage.cy";
import { PlanManagementPage } from "../../pages/wealthlane-customer/planManagementPage.cy";
import user from "../../fixtures/user.json"

const loginPage = new LoginPage()
const planManagement = new PlanManagementPage()

describe("Verifying Plan Management", function(){
    before(function(){
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')     //uatserver
        loginPage.login(user.customer.username,user.customer.password)
        cy.url().should('include','/overview')
        cy.log('Login Successful.') 
    })

    it("To verify add new plan", function(){
        planManagement.addNewPlan()
    })
})