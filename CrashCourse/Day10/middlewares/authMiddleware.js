let jwt = require("jsonwebtoken");

const authMiddleware =
	(...role) =>
	(req, res, next) => {
		console.log(req.headers.authorization, "authorization");
		let token = req.headers.authorization.split(" ")[1]; // "santhi sri".split(" ") = > ["santhi","sri"][1]=>sri
		console.log(token);
		console.log(role);
		if (!token) {
			res.status(403).send("unauthorised");
		}
		try {
			var decoded = jwt.verify(token, "2345");
			console.log(decoded, "decoded");
			if (decoded) {
				if (role.includes(decoded.role)) {
					req.body.userId = decoded.userId;
					next();
				} else {
					res.status(403).send("Unauthorised");
				}
			}
		} catch (err) {
			console.log(err);
			res.send("invalid token");
		}
	};

module.exports = authMiddleware;
