import { Button, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	// user from the store
	let user;
	return (
		<Flex
			as="nav"
			bg="blue.500"
			color="white"
			justify={"space-between"}
			p={3}
			m={2}
			align={"center"}
		>
			<Text>My Social Media App</Text>

			{/* Navigation links */}
			<Flex gap={4}>
				<Link to="/">Dashboard</Link>
				{!user && <Link to="/signup">Sign Up</Link>}
			</Flex>
			<Box>
				{user ? (
					<Flex>
						<Button>Log out</Button>
					</Flex>
				) : (
					<Link to="/login">
						<Button>Login</Button>
					</Link>
				)}
			</Box>
		</Flex>
	);
};

export default Navbar;
