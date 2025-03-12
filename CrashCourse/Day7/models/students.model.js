const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	attendance: Number,
	department: String,
});
// model

// create,read,update

const StudentModel = mongoose.model("students", StudentSchema);

module.exports = StudentModel;
