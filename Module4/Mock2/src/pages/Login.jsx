import React from "react";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../redux/reducers/authReducer";
import "../styles/Login.css"; // Import CSS file

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div className="login-container">
			<h2 className="login-title">Login</h2>
			<button
				className="login-button"
				onClick={() => dispatch(loginWithGoogle())}
			>
				Login with Google
			</button>
		</div>
	);
};

export default Login;
