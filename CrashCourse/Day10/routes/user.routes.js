const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
// const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const userRouter = express.Router();

// routes

// sign up/register
userRouter.post("/signup", async (req, res) => {
	const myPlaintextPassword = req.body.password;
	bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
		console.log(hash, "hashed pasword");
		if (err) {
			console.log(err);
			res.status(500).send("some thing went wrong");
		} else {
			// Store hash in your password DB.
			let userData = { ...req.body, password: hash };
			await UserModel.create(userData);
			res.send("signup successfull");
		}
	});
});
// lgin
userRouter.post("/login", async (req, res) => {
	// check wether the email exists in the db or not
	// then i cam login password should be same as the db saved password
	// user not registed /wrong password
	let user = await UserModel.findOne({ email: req.body.email });
	// {
	// 	_id, email, password;
	// }
	if (!user) {
		res.send("User doesn't exists");
	} else {
		let myPlaintextPassword = req.body.password; // from the request body
		let hashedPassword = user.password; // from the db
		bcrypt.compare(myPlaintextPassword, hashedPassword).then(function (result) {
			console.log(result);
			if (result) {
				let accessToken = jwt.sign(
					{ userId: user._id, role: user.role },
					"2345",
					{
						expiresIn: "2min",
					},
				);
				let refreshToken = jwt.sign(
					{ userId: user._id, role: user.role },
					"2345",
					{
						expiresIn: "1day",
					},
				);
				res.json({ msg: "login success", accessToken, refreshToken });
			} else {
				res.send("Wrong Password");
			}
		});
	}
});

userRouter.post("/refresh/:token", (req, res) => {
	let refreshToken = req.params.token;
	let decodeToken = jwt.verify(refreshToken, "2345");
	if (decodeToken) {
		let accessToken = jwt.sign(
			{ userId: decodeToken._id, role: decodeToken.role },
			"2345",
			{ expiresIn: "2min" },
		);
		res.status(200).json({ token: accessToken });
	} else {
		res.send("somthing wrong");
	}
});

module.exports = userRouter;

// lecture create a lecture
//

// accessToken=>short lived =>
// refreshToken => long lived

// masai portal => refresh token =>1 day
// accesstoken =>15 min
