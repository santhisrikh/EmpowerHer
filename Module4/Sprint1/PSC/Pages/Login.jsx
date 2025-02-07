import { Box, Input, Text, Button, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await axios.post(
				`https://carbonated-cautious-coast.glitch.me/login`,
				{
					username,
					password,
				},
			);
			if (response.data.success) {
				setLoading(false);
				navigate("/quiz");
			}
		} catch (err) {
			setError("Invalid username or password");
		}
	};

	return (
		<Box
			maxW={"sm"}
			mx={"auto"}
			mt={"10"}
			p={5}
			borderWidth={1}
			boxShadow={"md"}
		>
			<Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"} mb={4}>
				Login
			</Text>
			<form onSubmit={handleLogin}>
				<Stack gap={4}>
					<Input
						size={"lg"}
						type="text"
						placeholder="Enter username"
						value={username}
						onChange={(e) => setUserName(e.target.value)}
						required
					/>
					<Input
						size={"lg"}
						type="password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button
						type="submit"
						colorPalette={"blue"}
						width={"full"}
						loading={loading}
					>
						Login
					</Button>
					{error && (
						<Text color={"red.400"} textAlign={"center"}>
							{error}
						</Text>
					)}
				</Stack>
			</form>
		</Box>
	);
};

export default Login;
