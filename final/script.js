const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Fetch tasks from the server when the page loads
window.addEventListener("DOMContentLoaded", fetchTasks);

// Handle form submission to add a new task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const task = taskInput.value;
  addTask(task);
  taskInput.value = ""; // Clear input field
});

// Fetch tasks from the backend and display them
function fetchTasks() {
  fetch("http://127.0.0.1:3000/tasks")
    .then((response) => response.json())
    .then((tasks) => {
      taskList.innerHTML = ""; // Clear the current list
      tasks.forEach((task) => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
      });
    });
}

// Send a new task to the server
function addTask(task) {
  console.log(task);
  fetch("http://127.0.0.1:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task })
  })
    .then((response) => response.json())
    .then((newTask) => {
      const li = createTaskElement(newTask);
      taskList.appendChild(li);
    });
}

// Create a task list item and add delete button
function createTaskElement(task) {
  const li = document.createElement("li");
  li.textContent = task.task;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => deleteTask(task.id, li));

  li.appendChild(deleteBtn);
  return li;
}

// Delete a task from the server and remove from DOM
function deleteTask(taskId, taskElement) {
  fetch(`http://127.0.0.1:3000/tasks/${taskId}`, {
    method: "DELETE"
  }).then(() => {
    taskElement.remove(); // Remove the task from the DOM
  });
}
