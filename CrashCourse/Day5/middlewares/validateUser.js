const validateUser = (req, res, next) => {
	if (!req.body.name || !req.body.email) {
		return res.status(400).json({ message: "name and email are required" });
	}
	next();
};
module.exports = validateUser;
