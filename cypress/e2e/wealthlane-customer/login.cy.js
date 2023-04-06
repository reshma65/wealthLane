import { LoginPage} from "../../pages/loginPage.cy";
import user from "../../fixtures/user.json"

const loginPage =new LoginPage()

describe('Login Customer', function(){
    it('Verify login with invalid username', () => {  //.skip is used to skip this it block
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')
        loginPage.login(user.vendor.invalidUsername, user.vendor.password)   
      })
  
      it('Verify login with invalid password', () => {  //.skip is used to skip this it block
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')
        loginPage.login(user.vendor.username, user.vendor.invalidPassword) 
      })

    it('Verify login with valid credentials', function(){
        cy.visit('https://wealthlane-customer-uat.wealthlane.co/')
        loginPage.login(user.customer.username, user.customer.password)
        cy.url().should('include','/overview')
        cy.log('Login Successful.') 
    })
})
