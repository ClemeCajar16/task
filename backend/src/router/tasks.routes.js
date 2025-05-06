
import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTasks } from "../controllers/tasks.controllers.js";
import {validateSchema} from "../middleware/validator.middleware.js";
import {createTaskSchema} from "../schemas/task.schemas.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTasks);


export default router;

