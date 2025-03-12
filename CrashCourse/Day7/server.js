const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./routes/students.routes");
const curriculumRouter = require("./routes/curriculum.routes");
const app = express();
app.use(express.json());

// routes

app.get("/", (req, res) => {
	res.send("test route");
});
// routes
app.use("/students", studentRouter);
app.use("/curriculum", curriculumRouter);

app.listen(8080, async () => {
	try {
		await mongoose.connect(
			"mongodb://127.0.0.1:27017/student_management_system",
		);
	} catch (err) {
		console.log(err, "error in connecting mongodb");
	}
	console.log("mongodb connected");
	console.log("server is running on http://localhost:8080");
});

// read db ,write ad =>asyn
