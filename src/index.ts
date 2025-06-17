import express from "express";
import tasksRouter from './routes/tasks.routes'

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("<h1>You've unlocked the Tasks API in Ts and Express</h1> ");
});

app.use("/tasks", tasksRouter)

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`App running on port ${port}`));
