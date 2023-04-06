import {LoginPage} from "../pages/loginPage.cy"
import user from "../fixtures/user.json"
import { LogoutPage } from "../pages/logoutPage.cy"

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()


describe('All Login Tests', () => {
 
    it('Verify login with invalid username', () => {  //.skip is used to skip this it block
      cy.visit('/')
      loginPage.login(user.vendor.invalidUsername, user.vendor.password)   
    })

    it('Verify login with invalid password', () => {  //.skip is used to skip this it block
      cy.visit('/')
      loginPage.login(user.vendor.username, user.vendor.invalidPassword) 
    })

    it('Verify login with valid credentials', () => {  //.only is used to run this it block only from describe 
      cy.visit('/')
      loginPage.login(user.vendor.username, user.vendor.password)
      cy.url().should('include','/customer-list') //assertion  
      cy.log('Login Successful.')    
    })

    after(function(){
      logoutPage.logOut();
      cy.log('Logout Successful.')
    })
     
    
})

