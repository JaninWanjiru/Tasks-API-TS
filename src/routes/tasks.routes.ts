import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getSpecificTask,
  updateSpecificTask,
} from "../controllers/tasks.controller";
import { validateTask } from "../middlewares/validateTask";
const router = Router();

router.get("/", getAllTasks);
router.post("/", validateTask, createTask);
router.get("/:id", getSpecificTask);
router.patch("/:id", updateSpecificTask);
router.delete("/:id", deleteTask);

export default router;
