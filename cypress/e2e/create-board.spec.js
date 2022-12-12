/*
The existence of the board creation form is verified, then the creation of the board is performed 
and finally the existence of the board is verified.
*/

describe('Board creation flow', () => {

  beforeEach(function() {
      //visit the path
      cy.visit('/');
  })

  context('Verification of the existence of elements necessary for the creation of board', ()=>{
    it('should exist the Create New Board button and be visible', () =>{
       //existence of the button
        cy.contains('+ Create New Board').should('be.visible')
      })

    it('should be a board creation form',()=>{
        //enter to creation form
        cy.get('[data-test="add-board"]').click()
        // should not be redirect to any path
        cy.url().should('include', '/')
        //there should be an input with "Todo" value
        cy.get('[data-test="board-column"]').eq(0).should('value', "Todo")
        //there should be an input with "Doing" value
        cy.get('[data-test="board-column"]').eq(1).should('value', "Doing")
        //there should be an button with "Add New Value" value
        cy.get('[data-test="board-add-column"]').should('contain', "+ Add New Column")
        //there should be an button with "Create New Board" value
        cy.get('[data-test="board-create-board"]').should('contain', "Create New Board")

        })
    })

    context('Board creation based on the existence of the creation form and the Add Board button.', () => {
        it('board creation flow test', () => {
          //enter to creation form
          cy.get('[data-test="add-board"]').click()
    
          //enter the name of the board
          cy.get('[data-test="board-name"]').type("Test-BoardName")
          //clear the default value
          cy.get('[data-test="board-column"]').eq(0).clear()
          //enter the title of the new column
          cy.get('[data-test="board-column"]').eq(0).type("Column 1 test")
          //clear the default value
          cy.get('[data-test="board-column"]').eq(1).clear()
          //enter the title of the new column
          cy.get('[data-test="board-column"]').eq(1).type("Column 2 test")
          //create a new column
          cy.get('[data-test="board-add-column"]').click()
          //clear the default value
          cy.get('[data-test="board-column"]').eq(2).clear()
          //enter the title of the new column
          cy.get('[data-test="board-column"]').eq(2).type("Column 3 test")
          //create a new column
          cy.get('[data-test="board-add-column"]').click()
           //clear the default value
          cy.get('[data-test="board-column"]').eq(3).clear()
          //enter the title of the new column
          cy.get('[data-test="board-column"]').eq(3).type("Column 4 test")
          //delete the last column (column 4 test)
          cy.get('[data-test="board-column-delete"').eq(3).click()

          //create the new board
          cy.get('[data-test="board-create-board"]').click()
          

          //if exist the new board, then enter 
          if(cy.contains('Test-BoardName').click()){
            // should not be redirect to any path
            cy.url().should('include', '/')
            //check the existence of the columns
            cy.get('[data-test="column-name"]').eq(0).should('contain', "Column 1 test")
            cy.get('[data-test="column-name"]').eq(1).should('contain', "Column 2 test")
            cy.get('[data-test="column-name"]').eq(2).should('contain', "Column 3 test")
            
            //check the existence of the column deleted
            cy.contains('Column 4 test').should('not.exist')
            //check the existence of the new task button
            cy.contains('+ Add New Task').should('be.visible')
           
          }
        })
      })
})

