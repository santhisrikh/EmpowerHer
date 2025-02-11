import { Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import { LuMapPin } from "react-icons/lu";

const Demo = () => {
	return (
		<>
			<Box>
				<Heading>Hi thi sis Demo</Heading>
				<Button variant="subtle" colorPalette={"red"}>
					<LuMapPin /> Click me <LuMapPin />
				</Button>
			</Box>
		</>
	);
};

export default Demo;
