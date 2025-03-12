const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const DB_FILE = "db.json";

// read db
const readData = () => {
	try {
		const data = fs.readFileSync(DB_FILE, "utf8");
		return JSON.parse(data);
	} catch (err) {
		return [];
	}
};
// write data
const writeData = (data) => {
	fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf8");
};

// routes
// get all todos
app.get("/todos", (req, res) => {
	const db = readData();
	res.status(200).json(db);
});

// create todos
app.post("/todos", (req, res) => {
	let db = readData();
	const newTodo = {
		id: db.todos.length,
		task: req.body.task,
		status: req.body.status || false,
	};
	db.todos.push(newTodo);
	writeData(db);
	res.status(201).json(newTodo);
});

app.listen(8080, () => {
	console.log("server is running on http://localhost:8080");
});
