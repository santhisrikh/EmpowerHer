const express = require("express");
const app = express(); // i can usee all http methos to handle the routes
app.use(express.json()); //middileware

// let users = [
// 	{
// 		id: 1,
// 		name: "santhi",
// 		email: "santhi@gmail.com",
// 		age: 30,
// 	},
// 	{
// 		id: 2,
// 		name: "john",
// 		email: "john@gmail.com",
// 		age: 32,
// 	},
// ];

// handle the json request and responses

// GET (Retrive all the users)
// route=>method,url/endpoint,callback
app.get("/users", (req, res) => {
	res.json(users);
});
// POST (Create a new User)
app.post("/users", (req, res) => {
	console.log(req.body);
	// const newUser = { id: users.length + 1, ...req.body };
	const newUser = {
		id: users.length + 1,
		name: req.body.name,
		age: req.body.age,
		email: req.body.email,
	};
	users.push(newUser);
	res.status(201).json({ message: "user created", user: newUser });
});

// PUT
app.put("/users/:id", (req, res) => {
	const user = users.find((user) => user.id == req.params.id);
	user.name = req.body.name;
	res.json(user);
});
app.patch("/users/:id", (req, res) => {
	const user = users.find((user) => user.id == req.params.id);
	user.email = req.body.email;
	res.json(user);
});
app.delete("/users/:id", (req, res) => {
	const index = users.findIndex((user) => user.id == req.params.id);
	if (index === -1) res.status(404).send("user not found");
	const deletedUser = users.splice(index, 1);
	res.send("use delete dsuccesfully");
});

app.listen(3000, () => {
	console.log("server is running on http://localhost:3000");
});
