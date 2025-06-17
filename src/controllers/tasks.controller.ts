import { Request, Response } from "express";
import { PrismaClient, Task } from "@prisma/client";
const client = new PrismaClient();

// Get all tasks
export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await client.task.findMany();
    res.status(200).json(tasks);
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Create a task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description }: Task = req.body;
    const newTask = await client.task.create({
      data: {
        title,
        description,
      },
    });
    res.status(201).json(newTask);
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get a specific task with Id
export const getSpecificTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const specificTask = await client.task.findFirst({
      where: {
        id,
      },
    });
    res.status(200).json(specificTask);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
