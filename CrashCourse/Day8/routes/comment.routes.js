const express = require("express");
const CommentModel = require("../models/comment.model");

const commentRouter = express.Router();

// get
// post
commentRouter.post("/add", async (req, res) => {
	try {
		const newComment = new CommentModel(req.body);
		await newComment.save();
		res.status(201).send("comment created succesfully");
	} catch (error) {
		res.status(500).send("Failed to create a comment");
	}
});

// get all comments for a specific post

commentRouter.get("/:postId", async (req, res) => {
	try {
		const comments = await CommentModel.find({
			post: req.params.postId,
		}).populate("user", "name email");
		res.json(comments);
	} catch (error) {
		res.status(500).send("Failed to get the comments");
	}
});

module.exports = commentRouter;
