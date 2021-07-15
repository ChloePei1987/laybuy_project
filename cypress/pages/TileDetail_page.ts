export class TileDetailpage{

    navigate(url: string){
        cy.visit(url)
    }

    clickLink(classname: string, containname: string){
        cy.get(classname).contains(containname,).click()
    }
   
 
}