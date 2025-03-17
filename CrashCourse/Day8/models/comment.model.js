const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
	text: { type: String, required: true },
	post: { type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
});

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
