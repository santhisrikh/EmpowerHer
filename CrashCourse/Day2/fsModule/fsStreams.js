const fs = require("fs");
const writableStream = fs.createWriteStream("largeFile.txt");

writableStream.write("writing first Line.\n");
writableStream.write("writing second line.\n");

writableStream.end(() => {
	console.log("file writing is completed");
});

// reading
const readableStream = fs.createReadStream("largeFile.txt", "utf8");
readableStream.on("data", (chunk) => {
	console.log("received the chunk", chunk);
});

readableStream.on("end", () => {
	console.log("File reading completed");
});

// pipe =>copy the file content

const readableStream1 = fs.createReadStream("inputFile.txt");
const writableStream1 = fs.createWriteStream("outputFile.txt");
readableStream1.pipe(writableStream1); //copy content from inputfile to output file
writableStream1.on("finish", () => {
	console.log("files copied succesfully");
});

// modules>CJS,EJS
// import ,export ,require ,module.exports
// crypto => sceure password,api keys,genrate session tokens
// fs=>readFile,readFileSynch,straem
//

// Express => NodeJS frame Work
// Server , HTTP
// Client server Model
// HTTP/https => HyperText Transfer Protocol
// req=>server =>set of rules (HTTP/HTTPS)
// HTTP =>GET,POST,PUT?PATCH ,DELETE

// URL=>//expressjs.com/en/starter/installing.html
// https:=>Protocol(http/https)
// expressjs.com=>Domain Name/server Address
// en/starter/installing ->Path 
// ?color=red&size=10 => query params