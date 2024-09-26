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
