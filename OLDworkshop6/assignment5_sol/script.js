// Fetch tasks from the server when the page loads
window.addEventListener("DOMContentLoaded", fetchTasks);

// Handle form submission event
document
  .getElementById("taskForm")
  .addEventListener("submit", handleTaskSubmission);

// Handle task submission
function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById("taskInput").value;

  // Validate task length (max 20 characters)
  if (taskInputValue.length > 20) {
    alert("Task is too long. Please limit it to 20 characters.");
  } else {
    // Send the task to the backend and update the DOM
    addTask(taskInputValue);
    document.getElementById("taskInput").value = ""; // Clear the input field after submission
  }
}

// Fetch tasks from the backend and display them
function fetchTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((tasks) => {
      tasks.forEach((task) => {
        addTaskToList(task);
      });
    });
}

// Send a new task to the server
function addTask(task) {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task }) // Send the task as JSON
  })
    .then((response) => response.json())
    .then((newTask) => {
      addTaskToList(newTask); // Add the new task to the DOM
    });
}

// Add a task to the DOM
function addTaskToList(task) {
  const taskList = document.getElementById("taskList"); // Get the <ul> task list
  const newTask = document.createElement("li"); // Create a new list item <li>
  newTask.textContent = task.task; // Set the text of the new task (task object from server)
  taskList.appendChild(newTask); // Add the task to the list
}
