import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const client = new PrismaClient();

app.get("/", (_req, res) => {
    res.send("<h1>You've unlocked the Tasks API in Ts and Express</h1> ")
})

// Get all tasks
app.get("/tasks", async (_req, res) => {
  try {
    const tasks = await client.task.findMany();
    res.status(200).json(tasks);
  } catch (_e) {
    res.status(500).json({ message: "There's an issue somewhere" });
  }
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`App running on port ${port}`));