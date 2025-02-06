import React from "react";
import { Box, Text, Stack, Button } from "@chakra-ui/react";
const BreakPoints = () => {
	return (
		<Box p={5} border="2px solid red">
			<Text fontWeight={{ base: "medium", lg: "bold" }}>
				Responsive Font Weight
			</Text>
			<Box
				p={[2, 4, 6, 8]}
				bg={{ base: "gray.100", md: "blue.300", xl: "green.400" }}
			>
				Responsive Padding abd background
			</Box>
			<Text fontWeight={{ lgOnly: "bold" }}>
				This text is bold only in large screen
			</Text>
			<Stack hideFrom="lg" mt={5} p={4} bg="red.200">
				<Text>This text will be hidden from the `lg` breakpoint</Text>
			</Stack>
			<Stack hideBelow="md" mt={5} p={5} bg={"green.400"}>
				<Text>This text will be hidden below the `md` breakpoint</Text>
			</Stack>
			<Button
				colorPalette={{ base: "blue", md: "green", xl: "purple" }}
				size={["sm", "md", "lg"]}
				mt={5}
			>
				Responsive Button
			</Button>
		</Box>
	);
};

export default BreakPoints;
