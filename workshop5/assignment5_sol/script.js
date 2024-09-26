function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById("taskInput").value;

  if (taskInputValue.length > 20) {
    alert("Task is too long. Please limit it to 20 characters.");
  } else {
    // If valid, log the task to the console
    console.log("Task entered:", taskInputValue);

    addTaskToList(taskInputValue); // Add the task to the webpage

    document.getElementById("taskInput").value = ""; // Clear the input field after submission
  }
}

function addTaskToList(task) {
  let taskList = document.getElementById("taskList"); // Get the <ul> task list
  let newTask = document.createElement("li"); // Create a new list item <li>
  newTask.textContent = task; // Set the text of the new task
  taskList.appendChild(newTask); // Add the task to the list
}

document
  .getElementById("taskForm")
  .addEventListener("submit", handleTaskSubmission);

// --- New Code Below ---

window.addEventListener("DOMContentLoaded", fetchTasks);

// Function to fetch tasks from the backend and display them
function fetchTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json()) // Convert the response to JSON
    .then((tasks) => {
      const taskList = document.getElementById("taskList"); // Get the <ul> task list
      taskList.innerHTML = ""; // Clear the task list before adding fetched tasks

      // Loop through the tasks array and add each one to the list
      for (let i = 0; i < tasks.length; i++) {
        const newTask = document.createElement("li"); // Create a new list item
        newTask.textContent = tasks[i].task; // Set the text content to the task description
        taskList.appendChild(newTask); // Add the task to the <ul>
      }
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error); // Log any errors to the console
    });
}
