import { useState } from "react";

const initData = { id: 1, username: "", password: "", gender: "Female" };
const Dashboard = () => {
	const [formData, setFormData] = useState(initData); // {}
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	// handle the login inputs
	const handleInput = (e) => {
		console.log(e.target.value);
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value }); //
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.username || !formData.password) {
			// alert("fields are mandatory");
			setError("the fields are mandatory");
		}
		setData([...data, formData]); // setting the users data
		// setFormData(initData); //reset the fields
		console.log(formData, "fghjkl");
	};

	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter username"
					name="username"
					value={formData.username}
					onChange={handleInput}
				/>
				<input
					type="password"
					placeholder="Enter Password"
					name="password"
					value={formData.password}
					onChange={handleInput}
				/>
				<label htmlFor="">Female</label>
				<input
					type="radio"
					value="Female"
					name="gender"
					onChange={handleInput}
					checked={formData.gender == "Female"} //
				/>
				<label htmlFor="">Male</label>
				<input
					type="radio"
					value="Male"
					name="gender"
					onChange={handleInput}
					checked={formData.gender == "Male"} // controlled by the state
				/>

				<input type="submit" value="Login" />
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{data.map((user) => {
				return (
					<div>
						<h1>{user.username}</h1>
					</div>
				);
			})}
		</>
	);
};
export default Dashboard;
// forms

// forms
// usernmae
// password
