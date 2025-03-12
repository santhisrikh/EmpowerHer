const express = require("express");

// middleware Router()
const curriculumRouter = express.Router();

// get student details

curriculumRouter.get("/get", (req, res) => {
	res.send("Getting curriculum details succesfully");
});

module.exports = curriculumRouter;
