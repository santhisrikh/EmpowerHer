const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel;
