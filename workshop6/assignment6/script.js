function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById("taskInput").value;

  if (taskInputValue.length > 20) {
    alert("Task is too long. Please limit it to 20 characters.");
  } else {
    // If valid, log the task to the console
    console.log("Task entered:", taskInputValue);

    // Clear the input field after submission
    document.getElementById("taskInput").value = "";
  }
}

// Step 2: Attach the event listener to the form
document
  .getElementById("taskForm")
  .addEventListener("submit", handleTaskSubmission);

window.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
  fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((tasks) => {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      for (let i = 0; i < tasks.length; i++) {
        const newTask = document.createElement("li");
        newTask.textContent = tasks[i].task;
        taskList.appendChild(newTask);
      }
    });
}
