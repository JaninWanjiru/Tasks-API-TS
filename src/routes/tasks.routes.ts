import {Router} from 'express';
import { createTask, deleteTask, getAllTasks, getSpecificTask, updateSpecificTask } from '../controllers/tasks.controller';
const router = Router()

router.get("/", getAllTasks)
router.post("/", createTask)
router.get("/:id", getSpecificTask)
router.patch("/:id", updateSpecificTask)
router.delete("/:id", deleteTask)

export default router;