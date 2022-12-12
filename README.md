# Frontend Mentor - Kanban task management web app solution

### Clone repository by: https://github.com/dodoburner/kanban-task-management-web-app

 The goal is to perform cypress tests in a continuous integration and continuous deployment environment.

### Testing

#### E2E
- **Board creation:** The existence of the board creation form is verified, then the creation of the board is performed and finally the existence of the board is verified.
- **Task creation:** The existence of the task creation form is verified, then the task is created and finally the existence of the task in the board is verified.



---
# Proyect description

This is a solution to the [Kanban task management web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Frontend Mentor - Kanban task management web app solution](#frontend-mentor---kanban-task-management-web-app-solution)
    - [Clone repository by: https://github.com/dodoburner/kanban-task-management-web-app](#clone-repository-by-httpsgithubcomdodoburnerkanban-task-management-web-app)
    - [Testing](#testing)
      - [E2E](#e2e)
- [Proyect description](#proyect-description)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar

Expected Behaviour:

- Boards
  - Clicking different boards in the sidebar will change to the selected board.
  - Clicking "Create New Board" in the sidebar opens the "Add New Board" modal.
  - Clicking in the dropdown menu "Edit Board" opens up the "Edit Board" modal where details can be changed.
  - Columns are added and removed for the Add/Edit Board modals.
  - Deleting a board deletes all columns and tasks and requires confirmation.
- Columns
  - A board needs at least one column before tasks can be added. If no columns exist, the "Add New Task" button in the header is disabled.
  - Clicking "Add New Column" opens the "Edit Board" modal where columns are added.
- Tasks
  - Adding a new task adds it to the bottom of the relevant column.
  - Updating a task's status will move the task to the relevant column. 

### Screenshot

![Screenshot](https://user-images.githubusercontent.com/100496179/197352796-412b11a9-569c-49e9-95bd-a79776260cdd.png)

### Links

- Live Site URL: [link](https://kanban-task-management-app.netlify.app/)

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - State management tool

### Useful resources

- [How to create a toggle switch](https://www.w3schools.com/howto/howto_css_switch.asp) - Helped me create the theme toggle switch.
- [Have an onclick event fire only on parent and not it's children](https://stackoverflow.com/questions/9183381/how-to-have-click-event-only-fire-on-parent-div-not-children) - Helped me with closing modals when clicking outside the modal content container.
- [Package for using media queries in React](https://www.npmjs.com/package/react-responsive) - Helped me with rendering elements conditionally based on the window size

## Author

- Website - [Dorian Urem](https://dodoburner.github.io/Portfolio/)
- Frontend Mentor - [@dodoburner](https://www.frontendmentor.io/profile/dodoburner)
- LinkedIn - [Dorian Urem](https://www.linkedin.com/in/dorian-urem/)
