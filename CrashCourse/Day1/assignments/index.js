const { sin, cos, tan } = require("./trigonometry");
// command line argument
// process.argv = [,,]

const [, , opertion, num1, num2] = process.argv;
// const opertion = process.argv[2];

let a = Number(num1);
let b = Number(num2);
switch (opertion) {
	case "sin":
		console.log("sin", sin(a));
		break;
	case "cos":
		console.log("cos", cos(a));
		break;
	case "tan":
		console.log("tan", tan(2));
		break;
	default:
		console.log("invalid Operation");
}
