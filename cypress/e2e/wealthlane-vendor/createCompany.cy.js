import { LoginPage } from "../../pages/loginPage.cy";
import { CreateCompanyPage } from "../pages/createCompanyPage.cy";
import { LogoutPage } from "../pages/logoutPage.cy";

const loginPage = new LoginPage()
const createCompany = new CreateCompanyPage()
const logoutPage = new LogoutPage()

describe('Create Company', function(){
    before(function(){
        cy.visit('/')
        loginPage.login('admin', '1q2w3E*')
    })

    it('Verify Creating Company', function(){
        createCompany.clickCreateCompanyButton()
        cy.url().should('include', '/customer-list/create')
        createCompany.createCompanyStep1()
        createCompany.createCompanyStep2()
      })

    //   after(function(){
    //     logoutPage.logOut()
    //     cy.log('Logout Successful.')
    //   })
    
})

