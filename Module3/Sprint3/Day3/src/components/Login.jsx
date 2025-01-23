import React, { useContext, useState } from "react";
import "../styles/Login.css";
import { AuthContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter Username"
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
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default Login;
