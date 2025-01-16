{
	/* <div id="container">
	<h1 id="heading" class = "mainHeading">Welcome Back!</h1>
	<p id="subHeading">It is Module 3 </p>

</div>; */
}
{
	/* <ul>
    <li>Computers</li>
    <li>MobilePhones</li>
    <li>Headphones</li>
</ul> */
}

// let element = React.createElement("div", { id: "container" }, [
// 	React.createElement(
// 		"h1",
// 		{ id: "heading", className: "mainHeading" },
// 		"Welcome Back",
// 	),
// 	React.createElement(
// 		"p",
// 		{ id: "subHeading", style: { color: "red", fontSize: "32px" } },
// 		"It is Module 3",
// 	),
// ]);
let age = 20;
let message;
if (age > 18) {
	message = "you can drive!";
} else {
	message = "You can't drive";
}
const element1 = (
	<React.Fragment>
		{/* //React Frgament */}
		<div id="container" style={{ color: "red" }}>
			<h1
				id="heading"
				style={{ backgroundColor: "green" }}
				className="mainHeading"
			>
				Welcome Back!
			</h1>
			<p id="subHeading">It is Module 3 </p>{" "}
		</div>
		<div>
			<h1
				id="heading"
				style={{ backgroundColor: "green" }}
				className="mainHeading"
			>
				Welcome Back!
			</h1>
			<p id="subHeading">It is Module 3 </p>{" "}
		</div>
		<h1>{Date.now()}</h1>
		<h1>{age > 18 ? "You can drive" : "You can't drive"}</h1>
		<img src="" alt="" />
		<input type="text" placeholder="enter name" />
	</React.Fragment>
);
const element2 = (
	<React.Fragment>
		{/* //React Frgament */}
		<div id="container" style={{ color: "red" }}>
			<h1
				id="heading"
				style={{ backgroundColor: "green" }}
				className="mainHeading"
			>
				Welcome Back!
			</h1>
			<p id="subHeading">It is Module 3 </p>{" "}
		</div>
		<div>
			<h1
				id="heading"
				style={{ backgroundColor: "green" }}
				className="mainHeading"
			>
				Welcome Back!
			</h1>
			<p id="subHeading">It is Module 3 </p>{" "}
		</div>
		<h1>{Date.now()}</h1>
		<h1>{age > 18 ? "You can drive" : "You can't drive"}</h1>
		<img src="" alt="" />
		<input type="text" placeholder="enter name" />
	</React.Fragment>
);
let rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(element);

// JSX=> html in js file
// more readable
// effiecinet code
// syntax
//

