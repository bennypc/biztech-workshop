const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];
let taskId = 0;

app.get("/tasks", (request, response) => {
  response.json(tasks);
});

app.post("/tasks", (request, response) => {
  const newTask = {
    id: taskId++,
    task: request.body.task
  };

  tasks.push(newTask);
  response.json(newTask);
});

app.delete("/tasks/:id", (request, response) => {
  const taskId = parseInt(request.params.id);
  tasks = tasks.filter((task) => task.id !== taskId);
  response.sendStatus(200);
});

app.listen(port, () => {
  console.log("Server is running!");
});
