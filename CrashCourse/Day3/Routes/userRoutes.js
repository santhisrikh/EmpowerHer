const express = require("express");
const fs = require("fs");
const router = express.Router();
// let db = require("./db.json");
// console.log(db, "db");

const readUsers = () => {
	console.log("read users callled");
	try {
		const data = fs.readFileSync("./Routes/db.json", "utf8");
		return JSON.parse(data);
	} catch (error) {
		console.log(error);
		return [];
	}
};
let usersData = readUsers();
// console.log(usersData);

// write file
const writeUsers = (users) => {
	fs.writeFileSync("./Routes/db.json", JSON.stringify(users, null, 2), "utf8");
};
// handle the json request and responses

// GET (Retrive all the users)
// route=>method,url/endpoint,callback

const validateUser = (req, res, next) => {
	if (!req.body.name) {
		return res.send("Name is required");
	}
};
router.get("/", (req, res) => {
	let users = readUsers();

	console.log(users);
	res.json(users);
});
// POST (Create a new User)
router.post("/", validateUser, (req, res) => {
	console.log(req.body);
	// let users = readUsers();
	const newUser = {
		id: users.length + 1,
		name: req.body.name,
		age: req.body.age,
		email: req.body.email,
	};
	users.push(newUser);
	// writeUsers(users);
	res.status(201).json({ message: "user created", user: newUser });
});

// PUT
router.put("/:id", (req, res) => {
	// let users = readUsers();
	const user = users.find((user) => user.id == req.params.id);
	user.name = req.body.name;
	// writeUsers(users);
	res.json(user);
});
router.patch("/:id", (req, res) => {
	let users = readUsers();
	const user = user.find((user) => user.id == req.params.id);
	user.email = req.body.email;
	writeUsers(users);
	res.json(user);
});
router.delete("/:id", (req, res) => {
	let users = readUsers();
	const index = users.findIndex((user) => user.id == req.params.id);
	if (index === -1) res.status(404).send("user not found");
	const deletedUser = users.splice(index, 1);
	console.log(deletedUser);
	writeUsers(users);
	res.send("use delete dsuccesfully");
});

module.exports = router;
