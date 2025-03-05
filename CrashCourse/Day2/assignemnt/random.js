// random.js
const crypto = require("crypto");

function generateRandomNumber(length) {
	if (!length) {
		return "Provide length for random number generation.";
	}
	return crypto.randomBytes(length).toString("hex");
}

module.exports = { generateRandomNumber };
