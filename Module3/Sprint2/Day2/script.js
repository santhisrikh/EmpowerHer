// button clicking
// form =>submitting
// check box =>terms and condio=>
// radio => choose gender
//
//
// const App = () => {
// 	const handleClick = (e, id) => {
// 		console.log(e.target.textContent);
// 		// console.log(e, "synthetic event");
// 	};
// 	return (
// 		<>
// 			<button onClick={(e) => handleClick(e, "id")}>santhi Clicked</button>
// 			{/*  */}
// 		</>
// 	);
// };

// work with simple input field type text

const App = () => {
	const [username, setUserName] = React.useState(""); //
	const [email, setEmail] = React.useState("");
	const [status, setStatus] = React.useState(false);
	const [data, setData] = React.useState([]);
	// const handleName = (e) => {
	// 	// simply you are consoling
	// 	setUserName(e.target.value);
	// 	//
	// };
	// const handleEmail = (e) => {
	// 	setEmail(e.target.value);
	// };
	// const handleCheck = (e) => {
	//     console.log(e.target.checked);
	// 	setStatus(e.target.checked); // state
	// };

	const handleInput = (e) => {
		const { name, value } = e.target;
		setData([
			...data,
			{
				[name]: value, // computed property names
			},
		]);
	};

	const handleData = () => {
		let updatedData = [...data, { username, email }]; //adding new user object
		setData(updatedData); // updating the state
		//
	};
	const handleReset = () => {
		setUserName("");
		setEmail("");
	};
	// username
	//
	// document.getElementById("username").textContent = "external string";
	return (
		<>
			<input
				type="text"
				placeholder="Enter Username"
				onChange={handleInput}
				value={username} // tied to the react state
			/>

			<input
				// id="username"
				name="email"
				type="email"
				placeholder="Enter Email"
				value={email}
				onChange={handleInput}
			/>
			{/* password */}
			{/* address  */}

			{/* <input
				name="status"
				type="checkbox"
				checked={status}
				// onChange={handleInput}
			/> */}

			<button onClick={handleData}>Get Data</button>
			{data.map((ele, index) => {
				return (
					<React.Fragment>
						<h1>{ele.username}</h1>
						<p>{ele.email}</p>
					</React.Fragment>
				);
			})}
			<button onClick={handleReset}>ResetAll</button>
		</>
	);
};

const Input = (props) => {
	const { title, handleEmailInput, value } = props;
	return (
		<>
			<h1>{title}</h1>
			<input
				// id="username"
				type="email"
				placeholder="Enter Email"
				value={value}
				onChange={handleEmailInput}
			/>
		</>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// onclick
// onchange
// onsubmit
//

// username=>value in the input chaging when you are typing it
// name attricbute


// {"santhi":"jon"}
