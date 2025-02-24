import { Button, Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../../redux/actions/authActions";

const Navbar = () => {
	// user from the store
	let user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(signout());
	};
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
					<Flex gap={4}>
						<Text>{user.email}</Text>
						<Button onClick={handleLogout}>Log out</Button>
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
