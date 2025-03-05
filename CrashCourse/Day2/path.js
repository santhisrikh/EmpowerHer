const path = require("path");
const fs = require("fs");

// const filePath = path.join(__dirname, "folder", "file.txt");
// console.log(filePath);

// let newPath = path.dirname("/foo/bar/baz/asdf/quux");
// console.log(newPath);
// logs folder
const logsDir = path.join(__dirname, "logs");
const logFilePath = path.join(logsDir, "app.log");
if (!fs.existsSync(logsDir)) {
	fs.mkdirSync(logsDir);
}
fs.appendFileSync(logFilePath, "add new data");
