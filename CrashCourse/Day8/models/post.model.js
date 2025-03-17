const mongoose = require("mongoose");

// schema for the post documents
const PostsSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
});

// model

const PostModel = mongoose.model("posts", PostsSchema);
module.exports = PostModel;
