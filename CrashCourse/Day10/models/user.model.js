const mongoose = require("mongoose");

// user schema

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, enum: ["admin", "student"], default: "student" },
});

// model
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
