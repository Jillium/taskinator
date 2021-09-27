// Assignment 

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");



//create task function
var createTaskHandler = function(event) {

    event.preventDefault();


    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    console.log(event);
}



formEl.addEventListener("submit", createTaskHandler);


