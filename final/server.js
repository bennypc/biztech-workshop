const express = require("express");
const cors = require("cors"); // Import the CORS middleware

const app = express();
const port = 3000;

// Enable CORS for all routes (you can restrict this if needed)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.static("public")); // Serve static files from the public folder

// In-memory array to store tasks
let tasks = [];
let currentId = 1;

// Route to get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Route to add a new task
app.post("/tasks", (req, res) => {
  const task = req.body.task;
  const newTask = { id: currentId++, task };
  tasks.push(newTask);
  res.json(newTask);
});

// Route to delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
