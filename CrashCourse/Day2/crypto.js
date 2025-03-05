// store user passwords securly in db

const crypto = require("crypto");

// crypt.createHash

function hashPassword(passsword) {
	return crypto.createHash("sha256").update(passsword).digest("hex");
}
let password = "mysecuredpassword";
let hashedPassword = hashPassword(password);

console.log(hashedPassword, "1");

// create hashed message authentocation code
// function generateHMAC(data, sercretKey) {
// 	return crypto.createHmac("sha256", sercretKey).update(data).digest("hex");
// }
// console.log(generateHMAC("helo this is my securred data", "mysecretkey"));

// create session token
// function generateToken(size = 20) {
// 	return crypto.randomBytes(size).toString("hex");
// }

// console.log("session Token", generateToken());

// const buf = crypto.randomBytes(12);
// console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);

// fs=>module file system =>crud
