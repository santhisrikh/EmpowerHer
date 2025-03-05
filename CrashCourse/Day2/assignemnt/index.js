// index.js
const sum = require("./sum");
// const multiply = require("./multiplication");
// const subtract = require("./subtraction");
// const divide = require("./division");
// const trigonometry = require("./trigonometry");
const random = require("./random");

const [, , operation, num1, num2] = process.argv;

const a = parseFloat(num1);
const b = parseFloat(num2);

if (operation === "random") {
	console.log(random.generateRandomNumber(a));
} else if (operation === "sin") {
	console.log(`sin(${a}) =`, trigonometry.sin(a));
} else if (operation === "cos") {
	console.log(`cos(${a}) =`, trigonometry.cos(a));
} else if (operation === "tan") {
	console.log(`tan(${a}) =`, trigonometry.tan(a));
} else if (!isNaN(a) && !isNaN(b)) {
	switch (operation) {
		case "sum":
			console.log("Result:", sum(a, b));
			break;
		case "multiply":
			console.log("Result:", multiply(a, b));
			break;
		case "subtract":
			console.log("Result:", subtract(a, b));
			break;
		case "divide":
			console.log("Result:", divide(a, b));
			break;
		default:
			console.log(
				"Invalid operation. Use sum, multiply, subtract, divide, sin, cos, tan, or random.",
			);
	}
} else {
	console.log("Please provide valid numbers.");
}
