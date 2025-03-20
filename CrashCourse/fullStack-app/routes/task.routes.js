const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const TaskModel = require("../models/task.model");

const taskRouter = express.Router();

// regitser

taskRouter.post("/", authMiddleware, async (req, res) => {
	try {
		const task = await TaskModel.create({ ...req.body, user: req.user.id });
		res.status(201).json({ msg: "task added", task });
	} catch (error) {
		res.status(500).json("something went wrong");
	}
	// console.log(req);
});
// get tasks for a specific user
taskRouter.get("/", authMiddleware, async (req, res) => {
	const tasks = await TaskModel.find({ user: req.user.id });
	res.json(tasks);
});

// update a sepcifi task

taskRouter.put("/:taskId", authMiddleware, async (req, res) => {
	try {
		const task = await TaskModel.findOneAndUpdate(
			{
				_id: req.params.taskId,
				user: req.user.id,
			},
			req.body,
		);
		if (!task) return res.status(404).json({ error: "task not found" });
		res.json(task);
	} catch (err) {
		res.status(500).json({ error: "something went wrong" });
	}
});

module.exports = taskRouter;
