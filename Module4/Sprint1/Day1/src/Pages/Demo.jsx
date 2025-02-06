import {
	Button,
	Heading,
	HStack,
	Stack,
	VStack,
	SimpleGrid,
	Box,
	Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { FadeLoader } from "react-spinners";

const Demo = () => {
	const [loading, setLoading] = useState(true);
	const handleBtn = () => {
		alert("button is cliked");
	};
	return (
		// <Stack>
		// 	<Heading color="teal" fontWeight="bold" size={"3xl"}>
		// 		Welcome to React Chakra UI{" "}
		// 	</Heading>
		// 	<Button
		// 		size={"lg"}
		// 		// colorPalette={"red"}
		// 		// variant={"subtle"}
		// 		loading={loading}
		// 		loadingText="loading...."
		// 		spinnerPlacement="end"
		// 		// spinner={<FadeLoader size={10} />}
		// 	>
		// 		Click me
		// 	</Button>
		// 	<Button colorPalette={"teal"} variant={"outline"} onClick={handleBtn}>
		// 		Click me
		// 	</Button>
		// </Stack>
		// <SimpleGrid columns={3} gap="40px">
		<Center bg="bg.emphasized" h="500px" maxW="500px">
			<Box background="tomato" width="100%" padding="4" color="white">
				This is the Box
			</Box>
			<Box background="blue" width="100%" padding="4" color="white">
				This is the Box
			</Box>{" "}
			{/* <Box background="red" width="100%" padding="4" color="white">
				This is the Box
			</Box>{" "}
			<Box background="green" width="100%" padding="4" color="white">
				This is the Box
			</Box> */}
		</Center>
		// </SimpleGrid>
	);
};
export default Demo;
