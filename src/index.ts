import express from 'express';
import { getAllTasks } from './controllers/tasks.controller';

const app = express()

app.get("/", (_req, res) => {
    res.send("<h1>You've unlocked the Tasks API in Ts and Express</h1> ")
})

// Get all tasks
app.get("/tasks", getAllTasks);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`App running on port ${port}`));