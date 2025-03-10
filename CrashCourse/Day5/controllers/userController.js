const fs = require("fs");

// read dat afron db.json
const dbFilePath = "./data/db.json";

const readUsers = () => {
	try {
		let data = fs.readFileSync(dbFilePath, "utf8");
		return JSON.parse(data);
	} catch (err) {
		return [];
	}
};
// write users

const writeUsers = (data) => {
	fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), "utf8");
};
// routes

const getUsers = (req, res) => {
	// res.send("this is the users lists");
	let users = readUsers();
	res.status(200).json(users);
};
const createUsers = (req, res) => {
	// res.send("this is the users lists");
	let users = readUsers();
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		id: Date.now(),
	};
	users.push(newUser);
	writeUsers(users);
	res.status(201).json({ messgae: "new user created succesfully" });
};
// handles PUT
const updateUser = (req, res, next) => {
	console.log("update users");
	try {
		let users = readUsers();
		let index = users.findIndex((user) => user.id == req.params.id);
		console.log(index);
		if (index == -1) {
			const error = new Error("User not found");
			error.status = 404;
			throw error;
		}
		users[index] = { ...users[index], ...req.body };
		writeUsers(users);
		res.json({ message: "user updated succesfully" });
	} catch (err) {
		console.log(err);
		next(err);
	}
};

// sign up
const signupUser = (req, res) => {
	let users = readUsers();
	users.push({ ...req.body, id: Date.now() });
	writeUsers(users);
	res.status(200).json({ message: "signed up succesfully" });
};

module.exports = { getUsers, createUsers, updateUser, signupUser };
