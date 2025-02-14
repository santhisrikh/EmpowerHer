import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
	return (
		<Box bg="blue.500" p={4}>
			<Flex justify={"space-around"}>
				<Link as={RouterLink} to="/" fontSize={"xl"} colorPalette={"red"}>
					Home
				</Link>
				<Link
					to="/workouts"
					as={RouterLink}
					fontSize={"xl"}
					colorPalette={"red"}
				>
					Workout
				</Link>
			</Flex>
		</Box>
	);
};

export default Navbar;
