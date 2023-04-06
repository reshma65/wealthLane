import {LoginPage} from "../../pages/loginPage.cy"
import {VestingTemplatesPage} from "../../pages/wealthlane-customer/vestingTemplates.cy"
import user from "../../fixtures/user.json"


const vestingTemplatePage = new VestingTemplatesPage()
const loginPage =new LoginPage()

describe("Verifying Vesting Template", function(){
    this.beforeEach(function(){
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')     //uatserver
        loginPage.login(user.customer.username,user.customer.password)
        cy.url().should('include','/overview')
        cy.log('Login Successful.') 
    })

    it("To verify search functionality", function(){
        vestingTemplatePage.gotoVestingTemplate()
        vestingTemplatePage.searchTemplate()
    })

    it("To verify add new vesting template", function(){
        vestingTemplatePage.gotoVestingTemplate()
        vestingTemplatePage.addNewVestingTemplate()
    })

    it.only("To verify delete vesting template", function(){
        vestingTemplatePage.gotoVestingTemplate()
        vestingTemplatePage.searchTemplate()
        cy.wait(10000)
        vestingTemplatePage.deleteTemplate()
    })
  
})