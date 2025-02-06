"use client";

import {
	ChakraProvider,
	defaultConfig,
	defaultSystem,
	defineConfig,
	createSystem,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider(props) {
	const customConfig = defineConfig({
		theme: {
			tokens: {
				colors: {
					santhi: { value: "#0FEE0F" },
					priya: { value: "#EE0F0F" },
					shubra: { value: "#4c095c" },
					red: {
						200: "#0FEE0F",
						300: "#EE0F0F",
					},
				},
			},
		},
	});

	const system = createSystem(defaultConfig, customConfig);
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
