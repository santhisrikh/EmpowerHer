import {
	Box,
	Button,
	HStack,
	Input,
	Text,
	VStack,
	Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaMoon, FaRegPlusSquare, FaSun, FaTrash } from "react-icons/fa";
import {
	ColorModeButton,
	DarkMode,
	LightMode,
	useColorMode,
	useColorModeValue,
} from "@/components/ui/color-mode";
const Todo = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);
	const { toggleColorMode, colorMode } = useColorMode();
	console.log(colorMode, "todo component");
	const bg = useColorModeValue("white", "black");
	const textColor = useColorModeValue("black", "white");
	const borderColor = useColorModeValue("black", "red.400");

	const handleTasks = () => {
		setTodos([...todos, task]);
		setTask("");
	};
	const handleRemove = (index) => {
		setTodos(todos.filter((ele, i) => i != index));
	};
	return (
		<Box
			w={{ base: "90%", md: "50%", lg: "40%" }}
			p={5}
			boxShadow={"lg"}
			borderRadius={"md"}
			bg={bg}
			borderColor={borderColor}
		>
			<Button mb={4} onClick={toggleColorMode}>
				{colorMode == "light" ? <FaMoon /> : <FaSun />}
			</Button>
			<Text
				fontFamily={"monospace"}
				fontWeight={{ base: "medium", lg: "bold" }}
				color={textColor}
			>
				Responsive Todo List
			</Text>
			<HStack mt={4}>
				<Input
					value={task}
					placeholder="Enter Task"
					size={{ base: "md", md: "md", xl: "lg" }}
					onChange={(e) => setTask(e.target.value)}
				/>
				<Button
					colorPalette={{ base: "blue", md: "green", lg: "pink" }}
					onClick={handleTasks}
				>
					<FaRegPlusSquare /> Add Task
				</Button>
			</HStack>
			<VStack mt={4} spacing={3} align={"stretch"}>
				{todos.length > 0 &&
					todos.map((todo, index) => {
						return (
							<HStack
								key={index}
								p={[2, 4, 6, 8]}
								bg={{ base: "gray.100", md: "blue.100", lg: "green.200" }}
								mt={4}
								justifyContent={"space-between"}
							>
								<Text color={textColor}>{todo}</Text>
								<Button
									colorPalette={"red"}
									onClick={() => handleRemove(index)}
								>
									<FaTrash />
								</Button>
							</HStack>
						);
					})}
			</VStack>
		</Box>
	);
};

export default Todo;
