import { Input, HStack, Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/actions/actions";

const TodoForm = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const handleAdd = () => {
		const todoObj = {
			id: nanoid(),
			task: text,
			completed: false,
		};
		dispatch(addTodo(todoObj));
		setText("");
	};
	return (
		<HStack gap={4} m={4}>
			<Input
				placeholder="Enter Task name..."
				p={5}
				size={"lg"}
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button colorPalette={"teal"} onClick={handleAdd}>
				Add
			</Button>
		</HStack>
	);
};

export default TodoForm;
