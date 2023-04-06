import customer from "../../fixtures/wealthlane-customer/cutomer.json"



export class PlanManagementPage {

    setting = ':nth-child(4) > a'

    
    //addNewPlan
    planManagementButton = ':nth-child(9) > .sc-hjQCSK > a > .sc-fEOsli'
    addPlanButton = '.dIFtkx'
    planName = '[name="name"]'
    awardType = '.grid-cols-1 > .sc-gFGZVQ.undefined > .sc-dUWWNf > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    boardApprovalDate = '[name="boardApprovalDate"]'
    shareholderApprovalDate = '[name="shareHolderApprovalDate"]'
    planEffectiveDate = '[name="planEffectiveDate"]'
    noOfShareAuthorized = '[name="numberOfSharesAuthorized"]'
    noOfSharesAvailable = '[name="numberOfSharesAvailable"]'
    eliglibleShareClass = '[name="eligibleShareClass"]'
    planTerm = '[name="planTerm"]'
    evergreenPlan = ':nth-child(2) > .sc-gFGZVQ > .sc-dUWWNf > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    dividendEligibility = '.formGroup > .sc-dUWWNf > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    planDocument = '[name="planDocument"]'
    saveButton = '.footer-button > .dIFtkx'

    addNewPlan()
    {
        cy.get(this.setting).click()
        cy.get(this.planManagementButton).click()
        cy.get(this.addPlanButton).click()
        cy.get(this.planName).type(customer.planManagement.planName).should('have.value', customer.planManagement.planName)
        cy.get(this.awardType).type('RSU{enter}')
       .focused().tab() 
        cy.get(this.boardApprovalDate).type('01/01/2023{enter}').should('have.value','01/01/2023')
       .tab()
        cy.get(this.shareholderApprovalDate).type('02/02/2023{enter}').should('have.value','02/02/2023')
        .tab()
        cy.get(this.planEffectiveDate).type('05/05/2023{enter}').should('have.value','05/05/2023')
       .tab()
        cy.wait(1000)
        cy.get(this.noOfShareAuthorized).type('1000')
        cy.get(this.noOfSharesAvailable).type('500')
        cy.get(this.eliglibleShareClass).type('Class A')
        cy.get(this.planTerm).type(1)
        cy.get(this.evergreenPlan).type('No').focused().tab()
        cy.get(this.dividendEligibility).type('No').focused().tab()
        cy.get(this.planDocument).attachFile('plandoc.jpg')
        cy.get(this.saveButton).click()

    }
    

}
