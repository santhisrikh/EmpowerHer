import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const handleSignup = () => {};

	return (
		<div>
			<input
				type="text"
				placeholder="Enter email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Enter Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSignup}>Sign Up</button>
		</div>
	);
};

export default Signup;
