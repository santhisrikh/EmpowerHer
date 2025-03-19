const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		content: { type: String, required: true },
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
	},
	{
		timestamps: {
			createdAt: true,
			updatedAt: true,
		},
	},
);

const LectureModel = mongoose.model("lectures", LectureSchema);

module.exports = LectureModel;
