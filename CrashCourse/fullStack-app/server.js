const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRouter = require("./routes/task.routes");
const userRouter = require("./routes/user.routes");
dotenv.config();
console.log(process.env);
const app = express();

app.use(express.json()); // middle ware
app.use(cors());
app.get("/", (req, res) => {
	res.send("test route");
});

// users
app.use("/auth", userRouter);
// tasks
app.use("/tasks", taskRouter);
app.listen(process.env.PORT, async () => {
	try {
		await mongoose.connect(`${process.env.MONGO_URI}`);
	} catch (err) {
		console.log("error connect the db");
	}
	console.log("db connected");
	console.log(`server is running on http://localhost:${process.env.PORT}`);
});
