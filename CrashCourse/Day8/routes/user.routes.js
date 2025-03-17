const express = require("express");
const UserModel = require("../models/user.model");

const userRouter = express.Router();

// get ,post ,patc delete

// post new user details

userRouter.post("/add", async (req, res) => {
	// craete the user and add it db
	// req.body
	// model = >which interacts with the database
	try {
		const user = new UserModel(req.body);
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).send("error signing up...");
	}
});

// get all users
userRouter.get("/get", async (req, res) => {
	try {
		const users = await UserModel.find();
		res.json(users);
	} catch (error) {
		res.status(500).send("failed to get the users");
	}
});

module.exports = userRouter;
