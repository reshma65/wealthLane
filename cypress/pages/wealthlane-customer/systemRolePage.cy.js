import customer from '../../fixtures/wealthlane-customer/cutomer.json'


export class SystemRolePage{
    
    setting = ':nth-child(4) > a'
    systemRoles = ':nth-child(6) > .sc-hjQCSK > a > .sc-fEOsli'


    //addRole
    addButton = '.sc-hKpBwk > .sc-fEOsli'
    roleName = '[name="roleName"]'
    description = 'textarea'
    saveButton = '.footer-button > .dIFtkx'

    //editRole
    menuButton = ':nth-child(1) > [style="min-width: 0px; width: 20px;"] > .sc-jTYCaT > .material-symbols-outlined'
    editButton = 'ul > :nth-child(2)'
    systemUsersRole = ':nth-child(1) > [style="min-width: 0px; width: 20px;"] > .sc-jTYCaT > .material-symbols-outlined'

    //deleteRole
    deleteButton = 'ul > :nth-child(3)'
    confirmButton = '.popupButtons > .dIFtkx'

    gotoSystemRolePage(){
        cy.get(this.setting).click()
        cy.get(this.systemRoles).click()
    }

    addSystemRole(){
        cy.get(this.setting).click()
        cy.get(this.systemRoles).click()
        cy.get(this.addButton).click()
        cy.get(this.roleName).type(customer.systemRole.role)
        cy.get(this.description).type('This role is to monitor users.')
        cy.get(':nth-child(2) > .sc-hTtwUo > :nth-child(1) > .sc-iAvgwm > input').click()
        cy.get(':nth-child(3) > .sc-hTtwUo > :nth-child(1) > .sc-iAvgwm > input').click()
        cy.get(this.saveButton).click()
        if(cy.get('.notification-message').contains('Role added')){
            cy.log('Role Added successfully')
        }
    }

    editSystemRole(){
        cy.get(this.setting).click()
        cy.get(this.systemRoles).click()
        cy.get(this.menuButton).click()
        cy.get(this.editButton).contains('Edit').click()
        cy.get(this.roleName).type(customer.systemRole.role)
        cy.get(this.saveButton).click()
    }

    deleteSystemRole(){
        cy.get(this.setting).click()
        cy.get(this.systemRoles).click()
        cy.get(this.menuButton).click()
        cy.get(this.deleteButton).click()
        cy.get(this.confirmButton).click()
    }
}