const express = require("express");
const {
	getUsers,
	createUsers,
	updateUser,
	signupUser,
} = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const router = express.Router();

router.get("/", getUsers);
router.post("/", validateUser, createUsers);
router.put("/:id", updateUser);
router.post("/signup", signupUser);

module.exports = router;
