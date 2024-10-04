function handleTaskSubmission(event) {
  event.preventDefault(); // Prevent the form from refreshing

  // Get the task input value
  let taskInputValue = document.getElementById("taskInput").value;

  if (taskInputValue.length > 20) {
    alert("Task is too long. Please limit it to 20 characters.");
  } else {
    addTaskToBackend(taskInputValue);

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
        addTaskToList(tasks[i]);
      }
    });
}

function addTaskToBackend(task) {
  fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task })
  })
    .then((response) => response.json())
    .then((newTask) => {
      console.log(newTask);
      addTaskToList(newTask);
    });
}

function addTaskToList(task) {
  let taskList = document.getElementById("taskList");
  let newTask = document.createElement("li");

  newTask.textContent = task.task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    deleteTaskFromBackend(task.id, newTask);
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
}

function deleteTaskFromBackend(taskId, taskElement) {
  fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE"
  }).then(() => {
    taskElement.remove();
  });
}
