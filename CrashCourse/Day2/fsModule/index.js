// blog post
// creat blog
// create a file blog.txt
// CRUD
const fs = require("fs");
console.log("Start of the programm");
// read this input file
// fs.readFile("inputFile.txt", "utf8", (err, data) => {
// 	if (err) {
// 		console.log("Error while reading the file", err);
// 		return err;
// 	}
// 	console.log("File Content", data);
// });
const data = fs.readFileSync("inputFile.txt", "utf8");
console.log("File Content", data);
console.log("end of the programm");

// video /image
// bigger data
// rcreatReadStream
// chunks
// steam
