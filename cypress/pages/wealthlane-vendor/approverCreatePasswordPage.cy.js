

export class ApproverCreatePasswordPage{

    searchBar = '#login'
    enterButton = '#refreshbut > .md > .material-icons-outlined'
    
    searchEmail(email){
        cy.get(this.searchBar).type(email)
        cy.get(this.enterButton).click()
    
    }
    
    }