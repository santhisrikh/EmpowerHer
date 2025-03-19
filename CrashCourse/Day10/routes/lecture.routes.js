const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const LectureModel = require("../models/lecture.model");

const lectureRouter = express.Router();

// create a lecture

// /// This is protected route
// lectureRouter.post("/add", authMiddleware, async (req, res) => {
// 	// req.body --> title, attendance
// 	///console.log(req.body)
// 	await LectureModel.create(req.body);
// 	res.send("Lecture Created");
// });
// /// This is protected route
lectureRouter.post("/add", authMiddleware("admin"), async (req, res) => {
	// req.body --> title, attendance
	///console.log(req.body)
	await LectureModel.create(req.body);
	res.send("Lecture Created");
});

lectureRouter.get(
	"/get/all",
	authMiddleware("admin", "student"),
	async (req, res) => {
		try {
			let data = await LectureModel.find();
			res.status(200).json({ msg: "Lectures Data", data });
		} catch (error) {
			res.status(500).send("something went wrong");
		}
	},
);
lectureRouter.get("/get/mine", authMiddleware("admin"), async (req, res) => {
	try {
		let data = await LectureModel.find({userId:req.body.userId});
		res.status(200).json({ msg: "Lectures Data", data });
	} catch (error) {
		res.status(500).send("something went wrong");
	}
});

module.exports = lectureRouter;
