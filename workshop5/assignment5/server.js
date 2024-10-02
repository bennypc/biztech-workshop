const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, task: "Do homework" },
  { id: 2, task: "Laundry" },
  { id: 3, task: "Eat dinner" },
  { id: 4, task: "Go home" }
];

app.get("/tasks", (request, response) => {
  response.json(tasks);
});

app.listen(port, () => {
  console.log("Server is running!");
});

app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1, // Assign a unique ID
    task: req.body.task // Get the task from the request body
  };
  tasks.push(newTask); // Add to tasks array
  res.json(newTask); // Send back the new task
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id); // Convert id to integer
  tasks = tasks.filter((task) => task.id !== taskId); // Remove the task
  res.sendStatus(200); // Send OK status
});
