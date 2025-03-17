const mongoose = require("mongoose");

// users collection =>user documemt should follw this
const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
});

// i communicate with db thorogh model

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel
