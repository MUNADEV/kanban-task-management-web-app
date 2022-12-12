/*
The existence of the task creation form is verified, then the task is created and finally the existence 
of the task in the board is verified.
*/

describe('Task creation flow', () => {

  beforeEach(function() {
      //visit the path
      cy.visit('/');
  })

  context('Verification of the existence of elements necessary for the creation of tasks', ()=>{
    it('should exist the Add Task button and be enabled', () =>{
      //existence of the button
      if(cy.contains('+ Add New Task')){
        //if it exists it should be enabled
        cy.get('[data-test="add-task"]').should('be.enabled')
      }
    })

    it('should be a task creation form',()=>{
        //enter to creation form
        cy.get('[data-test="add-task"]').click()
        // should not be redirect to any path
        cy.url().should('include', '/')
        //there should be an empty name input
        cy.get('[data-test="task-name"]').should('contain', "")
        //there should be an empty description input
        cy.get('[data-test="task-description"]').should('contain', "")
        //there should be tho empty subtask input
        cy.get('[data-test="task-subtask"]').should('contain', "")
        cy.get('[data-test="task-subtask"]').should('contain', "")

        //there should be a init Todo status
        cy.get('[data-test="task-status"]').should('contain', "Todo")
        //there should be two buttons enabled
        cy.contains('+ Add New Subtask').should('be.enabled')
        cy.contains('Create Task').should('be.enabled')
    })
  })
  

  context('Task creation based on the existence of the creation form and the Add Task button.', () => {
    it('task creation flow test', () => {
      //enter to creation form
      cy.get('[data-test="add-task"]').click()

      //enter the name of the task
      cy.get('[data-test="task-name"]').type("Test-TaskName")
      //enter the description of the task
      cy.get('[data-test="task-description"]').type("This is a example for cypress test")
      //enter the subtask of the task
      cy.get('[data-test="task-subtask"]').eq(0).type("Test Subtask 1")
      cy.get('[data-test="task-subtask"]').eq(1).type("Test Subtask 2")
      //create a new subtask
      cy.get('[data-test="add-subtask"]').click()
      cy.get('[data-test="task-subtask"]').eq(2).type("Test New Subtask")

      //enter the state of the task
      cy.get('[data-test="task-status"]').select("Doing")
      //create task by button
      cy.get('[data-test="create-task"]').click()

      //Enter the previously created task
      //if it exists, then enter
      if(cy.contains('Test-TaskName').click()){
        // should not be redirect to any path
        cy.url().should('include', '/')
        //check the existence of the name
        cy.get('[data-test="task-d-name"]').should('contain', "Test-TaskName")
        //check the existence of the description
        cy.get('[data-test="task-d-description"]').should('contain', "This is a example for cypress test")
        //check the existence of the subtasks
        cy.get('[data-test="task-d-subtask"]').eq(0).should('contain', "Test Subtask 1")
        cy.get('[data-test="task-d-subtask"]').eq(1).should('contain', "Test Subtask 2")
        cy.get('[data-test="task-d-subtask"]').eq(2).should('contain', "Test New Subtask")
        //check the existence of the state
        cy.get('[data-test="task-d-status"]').should('contain', "Doing")
      }
    })
  })
})