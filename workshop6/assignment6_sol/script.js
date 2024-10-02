// Handle task submission (adding a task)
function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById("taskInput").value;

  if (taskInputValue.length > 20) {
    alert("Task is too long. Please limit it to 20 characters.");
  } else {
    // Send the task to the backend
    addTaskToBackend(taskInputValue);

    // Clear the input field after submission
    document.getElementById("taskInput").value = "";
  }
}

// Function to send a POST request to the backend (add task)
function addTaskToBackend(task) {
  fetch("http://localhost:3000/tasks", {
    method: "POST", // Specify POST method to send data
    headers: {
      "Content-Type": "application/json" // We're sending JSON data
    },
    body: JSON.stringify({ task }) // Convert the task to JSON format
  })
    .then((response) => response.json()) // Convert the server response to JSON
    .then((newTask) => {
      addTaskToList(newTask); // Pass the entire newTask object
    })
    .catch((error) => {
      console.error("Error adding task:", error); // Log any errors
    });
}

// Function to fetch tasks from the backend and display them
window.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json()) // Convert the response to JSON
    .then((tasks) => {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = ""; // Clear the task list before adding fetched tasks

      tasks.forEach((task) => {
        addTaskToList(task); // Add each task to the DOM
      });
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error); // Log any errors
    });
}

// Function to add a task to the DOM (webpage)
function addTaskToList(task) {
  let taskList = document.getElementById("taskList"); // Get the <ul> task list
  let newTask = document.createElement("li"); // Create a new list item <li>

  newTask.textContent = task.task; // Set the text of the task

  // Create a delete button for each task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add event listener for the delete button
  deleteButton.addEventListener("click", function () {
    deleteTaskFromBackend(task.id, newTask); // Call the delete function
  });

  newTask.appendChild(deleteButton); // Add the delete button to the task
  taskList.appendChild(newTask); // Add the task to the list
}

// Function to send a DELETE request to the backend (remove task)
function deleteTaskFromBackend(taskId, taskElement) {
  fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE" // Specify DELETE method
  })
    .then(() => {
      taskElement.remove(); // Remove the task from the webpage (DOM)
    })
    .catch((error) => {
      console.error("Error deleting task:", error); // Log any errors
    });
}

// Attach event listener to the form for submitting tasks
document
  .getElementById("taskForm")
  .addEventListener("submit", handleTaskSubmission);
