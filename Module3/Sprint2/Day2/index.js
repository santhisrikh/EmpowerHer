const initObj = {
	username: "",
	email: "",
};
const App = () => {
	const [formData, setFormData] = React.useState(initObj);
	const [data, setData] = React.useState([]);
	const handleChange = (e) => {
		console.log(e.target.value, e.target.name);
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		// setFormData({ ...formData, username: e.target.value });
		// setFormData({ ...formData, email: e.target.value });
	};
	const handleData = () => {
		setData([...data, formData]);
	};
	console.log(data);
	return (
		<>
			<input
				type="text"
				placeholder="Enter username"
				value={formData.username}
				onChange={handleChange}
				name="username"
			/>
			<input
				type="email"
				placeholder="Enter user email"
				value={formData.email}
				onChange={handleChange}
				name="email"
			/>
			<button onClick={handleData}>FetchData</button>
		</>
	);
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// uncotrolledcomponent => useRef
// [name] : value
// 
