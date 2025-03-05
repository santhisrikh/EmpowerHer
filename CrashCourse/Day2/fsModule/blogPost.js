const fs = require("fs");

// create blog post
function createBlogPost(content) {
	const fileName = "blog.txt";
	fs.writeFileSync(fileName, content);
	console.log("post created succesfully");
}

createBlogPost("this is my first Blog");

// read blog post

function readBlogPost() {
	if (fs.existsSync("blog.txt")) {
		const content = fs.readFileSync("blog.txt", "utf8");
		console.log(content, "reading file");
	} else {
		console.log("Not found");
	}
}
readBlogPost();

function updateBlogPost(newContent) {
	if (fs.existsSync("blog.txt")) {
		const content = fs.appendFileSync("blog.txt", `\n${newContent}`);
		console.log("Blog post updated succesfully");
	} else {
		console.log("Not found");
	}
}
updateBlogPost("Adding new Content");

function deleteBlogPost() {
	if (fs.existsSync("blog.txt")) {
		const content = fs.unlinkSync("blog.txt");
		console.log("Blog post deleted succesfully");
	} else {
		console.log("Not found");
	}
}
deleteBlogPost();
