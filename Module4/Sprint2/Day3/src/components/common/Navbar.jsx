import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<Box bg="teal.200" p={4} shadow="lg">
			<Flex justify={"space-between"}>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/todo">Todo</NavLink>
			</Flex>
		</Box>
	);
};

export default Navbar;
