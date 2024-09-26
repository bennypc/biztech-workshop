fetch("url")
  .then((response) => response.json())
  .then((data) => {});

fetch("url")
  // Convert the response to JSON
  .then((response) => response.json())
  // Do something with the data
  .then((data) => {});

window.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json()) // Convert the response to JSON
    .then((tasks) => {
      // Code to display tasks
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error); // Handle errors
    });
}

const taskList = document.getElementById("taskList"); // Get the <ul> task list
taskList.innerHTML = ""; // Clear the task list before adding fetched tasks

for (let i = 0; i < tasks.length; i++) {
  const newTask = document.createElement("li"); // Create a new list item
  newTask.textContent = tasks[i].task; // Set the text content to the task description
  taskList.appendChild(newTask); // Add the task to the <ul>
}
