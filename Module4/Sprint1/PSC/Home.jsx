import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
const Home = () => {
	return (
		<Box
			textAlign={"center"}
			p={"8"}
			maxW={"md"}
			boxShadow={"lg"}
			borderWidth={1}
			m="auto"
			bg="whiteAlpha.600"
		>
			<Heading size="xl" mb={4}>
				Welcome to the Quiz App 🚀{" "}
			</Heading>
			<Text>
				Test You Knowledge and challenge your self with our Quiz. Please{" "}
				<Link to="/login">Login</Link> to get Started.
			</Text>
		</Box>
	);
};

export default Home;
