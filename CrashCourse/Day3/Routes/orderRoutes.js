const express = require("express");
const fs = require("fs");
const router = express.Router();

let orders = [
	{
		id: 1,
		userId: 1,
		item: "Laptop",
		price: 200,
		status: "shipped",
	},
	{
		id: 2,
		userId: 2,
		item: "Phone",
		price: 2000,
		status: "pending",
	},
];

router.get("/", (req, res) => {
	res.json(orders);
});

router.post("/", (req, res) => {
	const newOrder = {
		id: orders.length + 1,
		userId: req.body.userId,
		item: req.body.item,
		price: req.body.price,
		status: "Pending",
	};
	orders.push(newOrder);
	res.status(201).send("order created successfully");
});

module.exports = router;
// to get all orders
// /orders

// middlewares

// 

