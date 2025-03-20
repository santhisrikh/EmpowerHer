const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");
const userRouter = express.Router();

const generateAccessToken = (user) => {
	return jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, {
		expiresIn: "15min",
	});
};
const generateRefreshToken = (user) => {
	return jwt.sign({ id: user._id }, process.env.ACCESS_SECRET, {
		expiresIn: "1d",
	});
};

// regitser

userRouter.get("/", (req, res) => {
	res.send("usersData");
});

// Register

userRouter.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(hashedPassword);
		const user = await UserModel.create({
			name,
			email,
			password: hashedPassword,
		});
		res.status(200).json({ message: "user registered", userId: user._id });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

// login
// client password == stored password in the db
// genrate a token =>jwt
userRouter.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
		if (!user) return res.status(404).json({ error: "user not found" });
		const isValidPassword = await bcrypt.compare(password, user.password);
		if (!isValidPassword) {
			return res
				.status(400)
				.json({ error: "wrong password ,please try again!" });
		} else {
			let accessToken = generateAccessToken(user);
			res.json({ message: "login sucessfull", accessToken });
		}
	} catch (error) {
		res.send("something went worng");
	}
});

userRouter.post("/refreshToken/:refreshToken", (req, res) => {
	const { refreshToken } = req.params;
	if (!refreshToken) {
		return res.status(401).json({ err: "no refresh Token,pleas login again" });
	} else {
		jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
			if (err) return res.status(403).json({ error: "invalid refresh token" });
			const accessToken = generateAccessToken(user);
			res.status({ msg: "accestoken generated", accessToken });
		});
	}
});

module.exports = userRouter;
