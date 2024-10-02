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
