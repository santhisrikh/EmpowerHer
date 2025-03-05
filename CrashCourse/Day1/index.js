// console.log("Start of the Program",1);
// setTimeout(() => {
// 	console.log("Hello from Node.js after 2 seconds",2);
// }, 2000);
// console.log("End of the program",3);

// process = >global object

// process = {
//     argv : []
// }
// process.argv
// console.log(process.argv);
// let name = process.argv[2];
// console.log(name);

// if (name) {
// 	console.log(`Hello ${name}`);
// } else {
// 	console.log("name shoulbe given in the CL Argument");
// }
let operation = process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);

switch (operation) {
	case "add":
		console.log(a + b);
		break;
	case "sub":
		console.log(a - b);
		break;
	default:
		console.log("Unkonw operation");
}


// backend
// client server model 
// event loop = >node 
// repl
// comman line arguments
// node and modules 