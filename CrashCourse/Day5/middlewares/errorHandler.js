const errorHandler = (err, req, res, next) => {
	console.log(err, "error in middleware");
	console.error("Error", err.message);
	res
		.status(err.status || 500)
		.json({ message: err.message || "Internal Server Error" });
};

module.exports = errorHandler;

// cors
