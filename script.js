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
  fetch("https://biztech-workshop.onrender.com/tasks")
    .then((response) => response.json())
    .then((tasks) => {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      for (let i = 0; i < tasks.length; i++) {
        const newTask = document.createElement("li");
        newTask.textContent = tasks[i].task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
          deleteTaskFromBackend(tasks[i].task.id, newTask);
        });

        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
      }
    });
}

function addTaskToBackend(task) {
  fetch("https://biztech-workshop.onrender.com/tasks", {
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
  fetch(`https://biztech-workshop.onrender.com/tasks/${taskId}`, {
    method: "DELETE"
  }).then(() => {
    taskElement.remove();
  });
}
