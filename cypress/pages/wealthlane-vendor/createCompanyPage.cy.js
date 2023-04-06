import cc from '../fixtures/createCompanyValues.json'

export class CreateCompanyPage{

    createcompany_button = '.sc-bczRLJ > .material-symbols-outlined'
    //Step1
    companyName = 'input[name="name"]'
    ticker = 'input[name="ticker"]'
    taxId = 'input[name="taxId"]'
    countryOfIncorporation = ':nth-child(4) > .sc-dsQDmV > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    stateOfIncorporation = ':nth-child(5) > .sc-dsQDmV'
    dateOfIncorporation = '.react-datepicker__input-container > input'
    industrySector = ':nth-child(7) > .sc-dsQDmV > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    primaryStockExchange = ':nth-child(8) > .sc-dsQDmV > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    website = ':nth-child(9) > input'
    domainName = ':nth-child(10) > input'

    country = ':nth-child(1) > .sc-dsQDmV > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    zipCode = ':nth-child(2) > :nth-child(1) > .grid > :nth-child(2) > input'
    state = ':nth-child(2) > :nth-child(1) > .grid > :nth-child(3) > input'
    city = ':nth-child(4) > input'
    address1 = '.col-span-2 > .sc-TRNrF > input'

    continueButton = '.items-baseline > .flex > .sc-bczRLJ'

    //Step2
    //Admin Information
    adminFirstName = 'input[name="ADMIN.firstName"]'
    adminLastName = 'input[name="ADMIN.lastName"]'
    adminEmail = 'input[name="ADMIN.email"]'
    adminPhoneNumber = 'input[name="ADMIN.phone"]'

    //Approver Information
    approverFirstName = 'input[name="APPROVAL.firstName"]'
    approverLastName = 'input[name="APPROVAL.lastName"]'
    approverEmail = 'input[name="APPROVAL.email"]'
    approverPhoneNumber = 'input[name="APPROVAL.phone"]'

    //Wealthlane Contacts
    implementationManagerUser = ':nth-child(2) > .grid-cols-2 > .sc-TRNrF > .sc-dsQDmV > #color > .css-tvxh67-control > .css-2y11m > .css-ackcql'
    productSupportUser = ':nth-child(3) > .grid-cols-2 > .sc-TRNrF > .sc-dsQDmV > #color > .css-tvxh67-control > .css-2y11m > .css-ackcql'
    productionSupportUser = ':nth-child(4) > .grid-cols-2 > .sc-TRNrF > .sc-dsQDmV > #color > .css-tvxh67-control > .css-2y11m'
    relationshipManagerUSer = ':nth-child(5) > .grid-cols-2 > .sc-TRNrF > .sc-dsQDmV > #color > .css-tvxh67-control > .css-2y11m > .css-ackcql'
    serviceManagerUser = ':nth-child(6) > .grid-cols-2 > .sc-TRNrF > .sc-dsQDmV > #color > .css-tvxh67-control > .css-2y11m'

    saveButton = '.flex > .sc-bczRLJ'

    clickCreateCompanyButton(){
        cy.get(this.createcompany_button).click()
    }

    createCompanyStep1(){
        cy.get(this.companyName).type(cc.companyName)
        cy.get(this.ticker).type(cc.ticker)
        cy.get(this.taxId).type(cc.taxId)
        cy.get(this.countryOfIncorporation).type('{downarrow}{enter}')
        cy.get(this.industrySector).type('{downarrow}{enter}')
        cy.get(this.primaryStockExchange).type('{downarrow}{enter}')
        cy.get(this.website).type(cc.website)
        cy.get(this.domainName).type(cc.domainName)
        cy.get(this.country).type('{downarrow}{enter}')
        cy.get(this.zipCode).type(cc.zipCode)
        cy.get(this.state).type(cc.state)
        cy.get(this.city).type(cc.city)
        cy.get(this.address1).type(cc.address1)
        cy.get(this.continueButton).click()
        
    }

    createCompanyStep2(){
        cy.get(this.adminFirstName).type(cc.adminFirstName);
        cy.get(this.adminLastName).type(cc.adminLastName);
        cy.get(this.adminEmail).type(cc.adminEmail);
        cy.get(this.adminPhoneNumber).type(cc.adminPhoneNumber);
        cy.get(this.approverFirstName).type(cc.approverFirstName);
        cy.get(this.approverLastName).type(cc.approverLastName);
        cy.get(this.approverEmail).type(cc.approverEmail);
        cy.get(this.approverPhoneNumber).type(cc.approverPhoneNumber);
        cy.get(this.implementationManagerUser).type('Musk 1 Musk 1{enter}')
        .focused().tab()
        .type('Musk 2 Musk 2{enter}')
        .focused().tab()
        .type('Musk 3 Musk 3{enter}')
        .focused().tab()
        .type('Musk 4 Musk 4{enter}')
        .focused().tab()
        .type('test test{enter}')
        cy.get(this.saveButton).click()
        cy.log('Company created successfully.')

       
    }

}

// cy.get(this.productionSupportUser).type('{downarrow}{enter}')
// cy.focused().tab()
// cy.get(this.relationshipManagerUSer).type('{downarrow}{enter}')
// cy.focused().tab()
// cy.get(this.serviceManagerUser).type('{downarrow}{enter}')
// cy.focused().tab()