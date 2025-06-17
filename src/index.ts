import express from "express";
import {
  createTask,
  getAllTasks,
  getSpecificTask,
} from "./controllers/tasks.controller";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1>You've unlocked the Tasks API in Ts and Express</h1> ");
});

app.get("/tasks", getAllTasks);
app.post("/tasks", createTask);
app.get("/tasks/:id", getSpecificTask);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`App running on port ${port}`));
