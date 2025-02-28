import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";

const OrderSuccess = () => (
	<Center h="100vh">
		<Box textAlign="center" p={6} boxShadow="lg" borderRadius="md">
			<VStack spacing={4}>
				<Heading color="green.500">🎉 Order Placed Successfully!</Heading>
				<Text fontSize="lg" color="gray.600">
					Thank you for your purchase. Your order is being processed.
				</Text>
				<Button as={Link} to="/" colorScheme="blue" size="lg">
					Back to Products
				</Button>
			</VStack>
		</Box>
	</Center>
);

export default OrderSuccess;
