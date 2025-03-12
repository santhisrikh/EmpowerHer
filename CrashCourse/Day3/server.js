const express = require("express");
const fs = require("fs");
const app = express(); // i can usee all http methos to handle the routes
app.use(express.json()); //middileware
const userRoutes = require("./Routes/userRoutes");
const ordersRoutes = require("./Routes/orderRoutes");

//
let logger = (req, res, next) => {
	console.log("Time:", Date.now(), req.method, req.url);
	next();
};

app.use("/users", logger, userRoutes);
app.use("/orders", ordersRoutes);
app.listen(3000, () => {
	console.log("server is running on http://localhost:3000");
});

// express framework => house=>
//Express.Router

// Express Router
// users = > Get,PUT,path post delete
// orders =>
// products =>

// /users
//
