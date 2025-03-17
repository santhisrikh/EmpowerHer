const express = require("express");
const PostModel = require("../models/post.model");

const postRouter = express.Router();

// all the route

// create a  blog post

postRouter.post("/add", async (req, res) => {
	try {
		const newPost = new PostModel(req.body);
		await newPost.save();
		res.status(201).json({ msg: "new post created successfully" });
	} catch (error) {
		res.json({ err: "error creating the post" });
	}
});

// get all post by a specifc author
postRouter.get("/author/:authorId", async (req, res) => {
	try {
		// fethc posts by author id

		const posts = await PostModel.find({
			author: req.params.authorId,
		}).populate("author", "name email");
		res.json(posts);
	} catch (error) {
		res.json({ err: "error getting  the post" });
	}
});

// get all posts with author
postRouter.get("/", async (req, res) => {
	try {
		// fethc posts by author id

		const posts = await PostModel.find().populate("author", "name email");
		res.json(posts);
	} catch (error) {
		res.json({ err: "error getting  the post" });
	}
});
module.exports = postRouter;
