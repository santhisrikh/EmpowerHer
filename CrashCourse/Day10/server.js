// import respective libraries
// general routes
// middlewares
// connect node app with the database
// run server

const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.routes");
const lectureRouter = require("./routes/lecture.routes");

const app = express();
app.use(express.json()); // which handles the json request and
app.get("/", (req, res) => {
	res.send("This is my test route");
});
app.use("/users", userRouter);
app.use("/lectures", lectureRouter);

app.listen(3000, async () => {
	// i have to connect to my database
	// empHer_crashcourse
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/empHer_crashcourse");
	} catch (error) {
		console.log(error, "error connecting the DB");
	}
	console.log("Db connected successfully");
	console.log("the server is running on http://localhost:3000");
});
