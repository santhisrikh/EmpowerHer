import React from "react";
import { Box, Flex, Link, Heading, Text, Badge } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const { items } = useSelector((state) => state.cart);

	// Calculate total number of items in cart
	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<Box bg="blue.500" p={4} color="white">
			<Flex justify="space-between" align="center" maxW="1200px" mx="auto">
				<Heading size="md">🛒 My Store</Heading>
				<Flex gap={4} align="center">
					<Link as={RouterLink} to="/" fontWeight="bold">
						Products
					</Link>
					<Link
						as={RouterLink}
						to="/cart"
						fontWeight="bold"
						position="relative"
					>
						Cart{" "}
						{totalItems > 0 && (
							<Badge
								bg="red.500"
								color="white"
								fontSize="0.8em"
								borderRadius="full"
								px={2}
								ml={1}
							>
								{totalItems}
							</Badge>
						)}
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;

{
	/* <Heading as = "h1">Products</Heading>; */
}
{
	/* <Link as = "RouteLink"></Link> */
}
