import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../redux/actions";
import { useNavigate, Link } from "react-router-dom";
import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";

const Checkout = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart);
	const navigate = useNavigate();

	// Calculate total price
	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	const handleOrder = () => {
		dispatch(placeOrder());
		navigate("/order-success");
	};

	return (
		<Center>
			<Box p={6} maxW="600px" width="100%">
				<Heading textAlign="center" mb={4}>
					Checkout
				</Heading>
				<Flex justify="center" mb={4}>
					<Button as={Link} to="/cart" colorScheme="blue">
						Back to Cart
					</Button>
				</Flex>

				{items.length === 0 ? (
					<Text fontSize="xl" color="gray.500" textAlign="center">
						Your cart is empty. Add items before checkout.
					</Text>
				) : (
					<Stack spacing={4}>
						<Heading size="md">Order Summary</Heading>

						{items.map((item) => (
							<Flex
								key={item.id}
								justify="space-between"
								align="center"
								p={3}
								borderWidth="1px"
								borderRadius="md"
								width="100%"
								maxW="500px"
								mx="auto"
							>
								<VStack align="start" spacing={1}>
									<Text fontWeight="bold">{item.title}</Text>
									<Text>
										Quantity: <b>{item.quantity}</b>
									</Text>
								</VStack>
								<Text fontWeight="bold">
									${(item.price * item.quantity).toFixed(2)}
								</Text>
							</Flex>
						))}

						<Heading size="lg" textAlign="center">
							Total: ${totalPrice.toFixed(2)}
						</Heading>
						<Flex justify="center">
							<Button colorScheme="green" size="lg" onClick={handleOrder}>
								Place Order
							</Button>
						</Flex>
					</Stack>
				)}
			</Box>
		</Center>
	);
};

export default Checkout;

// 999.999999.toFixed(2) => 999.99
