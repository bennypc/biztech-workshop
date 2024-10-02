function addTaskToBackend(task) {
  fetch("http://localhost:3000/tasks", {
    method: "POST", // We're sending data to the server
    headers: {
      "Content-Type": "application/json" // We need to tell the server the data type (JSON)
    },
    body: JSON.stringify({ task }) // Convert the task to JSON format
  })
    .then((response) => response.json()) // Convert the response from the server to JSON
    .then((newTask) => {
      addTaskToList(newTask.task); // Add the task to the DOM (webpage)
    })
    .catch((error) => {
      console.error("Error adding task:", error); // Handle any errors
    });
}
