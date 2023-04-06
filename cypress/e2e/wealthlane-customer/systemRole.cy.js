import {LoginPage} from "../../pages/loginPage.cy"
import user from "../../fixtures/user.json"
import {SystemRolePage} from "../../pages/wealthlane-customer/systemRolePage.cy"
import { LogoutPage } from "../../pages/logoutPage.cy"

const loginPage = new LoginPage()
const systemRolePage = new SystemRolePage()
const logoutPage = new LogoutPage()


describe('Add System Roles', function(){

        cy.on("uncaught:exception", (e, runnable) => {
        console.log("error", e)
        console.log("runnable", runnable)
        if (e.message.includes("Default blank page")) {
        return false;
        }
        });
        
    this.beforeAll(function(){
        //cy.visit('https://wealthlane-customer-qa.server247.info/')      //qaserver
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')     //uatserver
        loginPage.login(user.customer.username,user.customer.password)
        cy.url().should('include','/overview')
        cy.log('Login Successful.') 

    })
    it("Verify delete System Role", function(){
        systemRolePage.deleteSystemRole()
    })

    it.skip("Verify Editing System Role", function(){
        systemRolePage.editSystemRole()
    })
   
    it.skip("Verify Adding System Role", function(){
        systemRolePage.addSystemRole()
    
    })

        
        

        


       

   

    
})

