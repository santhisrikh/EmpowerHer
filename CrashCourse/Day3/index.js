// http module to build all these api endpoints
// Home page

// i need to build a server
// http
// const http = require("http");

// const server = http.createServer((req, res) => {
// 	console.log(req.method, req.url);
// 	res.writeHead(200, { "Content-Type": "text/plain" });
// 	if (req.method == "GET" && req.url == "/") {
// 		res.end("Hello, Express JS");
// 	} else if (req.method == "GET" && req.url == "/about") {
// 		res.end("This is About Page");
// 	} else {
// 		res.writeHead(404, { "Content-Type": "text/plain" });
// 		res.end("404 not found");
// 	}
// });

// server.listen(3000, () => {
// 	console.log("servering is running on http://localhost:3000");
// });

const express = require("express");
const app = express();
// routes

app.get("/", (req, res) => {
	res.send("Hello Node");
});
app.get("/users", (req, res) => {
	res.send("Hello Users");
});

app.listen(3000, () => {
	console.log("server  is running on http://localhost:3000");
});
