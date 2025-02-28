import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/actions";
import { Link } from "react-router-dom";
import {
	Box,
	Button,
	Grid,
	Heading,
	Image,
	Text,
	VStack,
	Flex,
} from "@chakra-ui/react";

const ProductList = () => {
	const dispatch = useDispatch();
	// const { products } = useSelector((state) => state.products);
	const products = useSelector((state) => state.products.products);
	
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<Box p={6}>
			<Flex justify="space-between" align="center" mb={4}>
				<Heading>Products</Heading>
				<Button as={Link} to="/cart" colorScheme="blue">
					Go to Cart
				</Button>
			</Flex>

			<Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
				{products.map((product) => (
					<VStack
						key={product.id}
						borderWidth="1px"
						borderRadius="md"
						p={4}
						spacing={3}
						align="center"
						minH="320px" // Ensures uniform card height
						justifyContent="space-between"
					>
						<Image src={product.image} alt={product.title} boxSize="150px" />
						<Text
							fontWeight="bold"
							fontSize="lg"
							textAlign="center"
							noOfLines={2}
						>
							{product.title}
						</Text>
						<Text fontSize="md">${product.price.toFixed(2)}</Text>
						<Button
							colorScheme="green"
							onClick={() => dispatch(addToCart(product))}
							mt="auto"
						>
							Add to Cart
						</Button>
					</VStack>
				))}
			</Grid>
		</Box>
	);
};

export default ProductList;
