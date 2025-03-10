const express = require("express");
const cors = require("cors");
var morgan = require("morgan");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json()); // middileware
// cors
app.use(cors());
app.use(
	cors({
		origin: "http://127.0.0.1:5500/",
	}),
);

const accessLogStream = fs.createWriteStream(
	path.join(__dirname, "access.log"),
	{
		flags: "a",
	},
);
// protect your app with helment using http headers
app.use(helmet());
// use morgan middleware
app.use(morgan("dev"));
app.use(morgan("combined", { stream: accessLogStream }));
// express.router()
const userRoutes = require("./routes/userRoutes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

// app.use(logger); // application middleware
app.use("/users", userRoutes);

app.use(errorHandler);
app.listen(8080, () => {
	console.log("server is running on htttp://localhost:8080");
});
