// Creates a new <li> element
let newElement = document.createElement("li");

// Adds text inside the new <li>
newElement.textContent = "Buy groceries";

let parentElement = document.getElementById("taskList");

// Adds the new <li> to the task list
parentElement.appendChild(newElement);

// Creates a new <li> element
let newTask = document.createElement("li");

// Sets the text inside the <li> to the task
newTask.textContent = "Walk turtle";

// Get the <ul> element
let taskList = document.getElementById("taskList");

// Adds the new task to the list
taskList.appendChild(newTask);
