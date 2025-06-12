import * as Task from "../controller/task.controller.js";
import express from 'express';

const router=express.Router();

router.post("/savetask",Task.createTask);
router.get("/fetchtask",Task.fetchTask);
router.patch("/updatetask",Task.updateTask);

export default router;