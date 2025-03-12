const express = require("express");
const StudentModel = require("../models/students.model.js");

// middleware Router()
const studentRouter = express.Router();

// get student details

studentRouter.get("/get", async (req, res) => {
	// i need to read the data from the databse (student_management_system db name)
	let data = await StudentModel.find();

	console.log(data);
	res.status(200).json(data);
});

studentRouter.post("/add", async (req, res) => {
	// i need to read the data from the databse (student_management_system db name)

	// req./body from here postman/front end
	// {
	//     name:"hui",
	// age:23,
	// deta}

	try {
		let newStudent = await StudentModel.create(req.body);
		res
			.status(201)
			.json({ message: "new student created successfully", data: newStudent });
	} catch (err) {
		res.status(500).send("something went wrong");
	}
});

studentRouter.patch("/update/:id", async (req, res) => {
	console.log(req.params); //
	await StudentModel.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({ message: "student detailes updated successfully" });
});

studentRouter.delete("/delete/:id", async (req, res) => {
	console.log(req.params); //
	await StudentModel.findByIdAndDelete(req.params.id);
	res.status(200).json({ message: "student details deleted successfully" });
});

module.exports = studentRouter;
