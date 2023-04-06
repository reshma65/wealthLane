import cc from "../fixtures/createCompanyValues.json"
import { ApproverCreatePasswordPage } from "../pages/approverCreatePasswordPage.cy"

const approverCreatePasswordPage = new ApproverCreatePasswordPage()


describe('Create Password of approver', function(){
    it('Open yopmail', function(){
        cy.visit('https://yopmail.com/')
        approverCreatePasswordPage.searchEmail(cc.approverEmail)
        cy.url().should('include','/wm')
        cy.get('https://wealthlane-auth.server247.info/Account/PasswordChange?token=Q2ZESjhGdnJzeDMrU2xCQnJnSFdWc3Ivb3loY2czazJacXd0VTYrZFFkZ0NSczJrU2ordmRFZEZxREhvdngyWGwwS3BJU0FaNTJjdENJZTdxU29pN3Vld1F5YUxnNzIwcmRKT0IreVNIRUdVY3JzTnFjOHV6NERDVFBxSXBualA4ZFNCcmZvcW5Ncy9HdDhMZXBpMk12b3ZRRThSaCt6aUtUT2pXRnZMakR5VFZoaXFIb3VKQng1aEFkNVNTYkQzc2lScVJ1NnJtTTdkQmc2K3RCMDlJcEltTXZRPQ==&redirect=aHR0cHM6Ly93ZWFsdGhsYW5lLWN1c3RvbWVyLnNlcnZlcjI0Ny5pbmZv').click()
    })
})