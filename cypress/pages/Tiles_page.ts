export class Tilespage{

     chooseTile(tilenumber: string){ 
       cy.get('#tile-img-border-'+tilenumber+' > .tile-module--img-wrapper--1xhqH').click()

     }
    
    //make assertions on metadata in the head element
     assertUrl(name: string){
      //cy.hash().should('include', name)
      
      cy.get('head title').should('contains', name)  
        //cy.contains(name)
     }
     waittime(time: number){
          cy.wait(time)
     }
}