import { Flex, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/actions/authActions";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const handleSignup = () => {
		dispatch(signup(email, password));
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
				<button onClick={handleSignup}>Sign Up</button>
			</VStack>
		</Flex>
	);
};

export default Signup;
