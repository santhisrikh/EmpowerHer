const os = require("os");
console.log("operating system", os.type());
console.log("platform", os.platform());
console.log("CPU arch", os.arch());
console.log("cystem, time", os.uptime());
console.log("version", os.version());

// memory information
console.log(
	"Toal Memory (GB)",
	(os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
);
