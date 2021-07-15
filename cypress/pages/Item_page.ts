export class Itempage{

    chooseItem(Itemnumber: number){ 
        cy.get(':nth-child('+Itemnumber+') > .grid-view-item > .grid-view-item__link').click() 
      }

      
      clickbutton(buttonname: string){ 
        cy.get(buttonname).click() 
      }

      assertproduct(productpath: string,name: string){  
      cy.get(productpath).should('include.text', name)
      }

      
    

}