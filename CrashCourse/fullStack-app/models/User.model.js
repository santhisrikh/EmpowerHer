const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
});

// model

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
