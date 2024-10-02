const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS for frontend-backend communication
app.use(cors());
app.use(express.json()); // Parse incoming JSON request bodies

// In-memory task array (temporary storage)
let tasks = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call the doctor" }
];
let currentId = 4; // To keep track of unique task IDs

// GET /tasks - Return all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST /tasks - Add a new task
app.post("/tasks", (req, res) => {
  const newTask = { id: currentId++, task: req.body.task }; // Create a new task object
  tasks.push(newTask); // Add the new task to the array
  res.status(201).json(newTask); // Respond with the newly created task
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
