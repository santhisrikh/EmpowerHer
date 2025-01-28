import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContextProvider";
import "../styles/Login.css";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const { login } = useContext(AuthContext); //consuming this context

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			// const response = await axios({
			//     method:"POST",
			//     url:`https://frill-shard-licorice.glitch.me/login`,
			//     data:{
			//         username,password
			//     }
			// })
			const response = await axios.post(
				`https://frill-shard-licorice.glitch.me/login`,
				{
					username,
					password,
				},
			);
			console.log(response);
			if (response.data.success) {
				console.log(response.data.token, "response");
				const { token } = response.data;
				login(token); //sens the token to context
			}
		} catch (err) {
			// setError(err)
			console.log(err);
			// setError(err.response.data.message);
		}
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<input
					type="text"
					placeholder="Enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type="submit" value="Login" />
			</form>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	);
};

export default Login;
