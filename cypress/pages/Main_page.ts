export class Mainpage{
   
    navigate(url: string){
        cy.visit(url)
    }

    clickButton(button_name: string){
        cy.get(button_name).click({ force: true })  
    }

    searchBar(context: string){  
        cy.get('input').type(context, { force: true })
    }

}