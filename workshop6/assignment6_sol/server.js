const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes (so frontend can communicate with backend)
app.use(express.json()); // Enable parsing of JSON bodies (for incoming requests)

// In-memory task array (temporary storage)
let tasks = [
  { id: 1, task: "Do homework" },
  { id: 2, task: "Laundry" },
  { id: 3, task: "Eat dinner" }
];

// GET /tasks - Return all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks); // Send tasks array as JSON
});

// POST /tasks - Add a new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1, // Generate a new ID for the task
    task: req.body.task // Get the task from the request body
  };
  cps;
  tasks.push(newTask); // Add the new task to the array
  res.json(newTask); // Send back the new task as a response
});

// DELETE /tasks/:id - Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id); // Extract the task ID from the URL
  tasks = tasks.filter((task) => task.id !== taskId); // Remove the task with the matching ID
  res.sendStatus(200); // Send a success response
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
