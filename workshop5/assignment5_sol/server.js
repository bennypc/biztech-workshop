const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let tasks = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call the doctor" }
];

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
