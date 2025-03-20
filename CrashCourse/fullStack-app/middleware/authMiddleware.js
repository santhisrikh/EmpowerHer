const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
	console.log(token, "token");
	if (!token) return res.status(401).json({ error: "access denied!" });
	try {
		const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
		console.log(decoded), "decoded";
		req.user = decoded;
		next();
	} catch (error) {
		res.status(403).json({ error: "invalid token" });
	}
};

module.exports = authMiddleware;
