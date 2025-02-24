import React, { useState } from "react";
import { Flex, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../../../redux/actions/authActions";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const handleLogin = () => {
		dispatch(signin(email, password, navigate));
	};

	return (
		<Flex h="90vh" justify={"center"} align={"center"}>
			<VStack
				w={"40%"}
				gap={"4"}
				border="1px solid grey"
				p={5}
				borderRadius={"md"}
			>
				<Input
					type="text"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Log in</button>
			</VStack>
		</Flex>
	);
};

export default Login;
