import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
const client = new PrismaClient();

export const getAllTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await client.task.findMany();
    res.status(200).json(tasks);
  } catch (_e) {
    res.status(500).json({ message: "Something went wrong" });
  }
}