import customer from "../../fixtures/wealthlane-customer/cutomer.json"

export class VestingTemplatesPage{
    setting = ':nth-child(4) > a'

    //adding new vesting template
    vestingTemplate = ':nth-child(10) > .sc-hjQCSK > a > .sc-fEOsli'
    addTemplateButton = '.sc-hKpBwk > .sc-fEOsli'
    vestingName = '[name="name"]'
    vestingType = ':nth-child(3) > .sc-gFGZVQ > .sc-dUWWNf > #color > .css-tvxh67-control > .css-l8c8x7'
    planType= ':nth-child(4) > .sc-gFGZVQ > .sc-dUWWNf > #color > .css-tvxh67-control > .css-l8c8x7 > .css-ackcql'
    saveButton = '.footer-button > .dIFtkx'

    //searchTemplate
    searchButton = '[name="search"]'

    //deleteTemplate
    menuButton = '.sc-jTYCaT > .material-symbols-outlined'
    deleteButton ='[class="delete-label"]'

    gotoVestingTemplate(){
        cy.get(this.setting).click()
        cy.get(this.vestingTemplate).click()  
    }

    addNewVestingTemplate(){
        cy.get(this.addTemplateButton).click()
        cy.get(this.vestingName).type(customer.vestingTemplates.VestingName)
        cy.get(this.vestingType).type('Cliff Vesting{enter}')
        .focused().tab() 
        .type('RSU{enter}')
        .focused().tab()
        .type(6)
        cy.get(this.saveButton).click()
    }

    searchTemplate(){
        cy.get(this.searchButton).type(customer.vestingTemplates.searchText)
        //cy.get('div').contains(customer.vestingTemplates.VestingName)
        //cy.log('Found Searched item.')
    }

    deleteTemplate(){
        cy.get(this.menuButton).click()
        cy.get(this.deleteButton).click()
    }
}