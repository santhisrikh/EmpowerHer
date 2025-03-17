const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const commentRouter = require("./routes/comment.routes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("test route");
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.listen(3000, async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/blog");
	} catch (err) {
		console.log("error in connecting the blog databse");
	}
	// connect the database
	console.log("connected to db successfully");
	console.log("the server is running on http://localhost:3000");
});
