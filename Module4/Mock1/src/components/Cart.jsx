import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions";
import { Link } from "react-router-dom";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Input,
	Stack,
	Text,
	VStack,
	Center,
} from "@chakra-ui/react";

const Cart = () => {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart); //redux store

	// Calculate total price / derived sttae
	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	return (
		<Center>
			<Box p={6} maxW="600px" width="100%">
				<Heading textAlign="center" mb={4}>
					Cart
				</Heading>
				<Flex justify="center" mb={4}>
					<Button as={Link} to="/" colorpalette="blue">
						Back to Products
					</Button>
				</Flex>

				{items.length === 0 ? (
					<Text fontSize="xl" color="gray.500" textAlign="center">
						Cart is empty
					</Text>
				) : (
					<Stack spacing={4}>
						{items.map((item) => (
							<Flex
								key={item.id}
								borderWidth="1px"
								borderRadius="md"
								p={4}
								align="center"
								justify="space-between"
								width="100%"
								maxW="500px"
								mx="auto"
							>
								<Flex align="center" gap={4} flex="1">
									<Image src={item.image} alt={item.title} boxSize="60px" />
									<VStack align="start" spacing={1}>
										<Text fontWeight="bold">{item.title}</Text>
										<Text>${item.price.toFixed(2)}</Text>
									</VStack>
								</Flex>

								<Flex align="center" gap={3}>
									<Input
										type="number"
										value={item.quantity} //item stored in the cartReducer
										min="1"
										width="60px"
										textAlign="center"
										onChange={(e) =>
											dispatch(updateQuantity(item.id, Number(e.target.value)))
										}
									/>
									<Button
										colorpalette="red"
										size="sm"
										onClick={() => dispatch(removeFromCart(item.id))}
									>
										Remove
									</Button>
								</Flex>
							</Flex>
						))}

						<Heading size="lg" textAlign="center">
							Total: ${totalPrice.toFixed(2)}
						</Heading>
						<Flex justify="center">
							<Button as={Link} to="/checkout" colorpalette="green" size="lg">
								Proceed to Checkout
							</Button>
						</Flex>
					</Stack>
				)}
			</Box>
		</Center>
	);
};

export default Cart;
