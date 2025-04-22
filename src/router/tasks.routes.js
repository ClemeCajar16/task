
import { Router } from "express";
import { authRequired } from "../middleware/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTasks } from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, createTask);
router.put("/tasks/:id", authRequired, updateTask);
router.delete("/tasks/:id", authRequired, deleteTasks);


export default router;

