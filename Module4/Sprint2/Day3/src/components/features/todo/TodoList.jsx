import { Box, VStack, Text, Button, HStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../../../redux/actions/actions";

const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	const [newText, setNewText] = useState("");
	const [editId, setEditId] = useState(null);

	const dispatch = useDispatch();
	console.log(todos, "inside todolist component");
	const handleEdit = (id, preText) => {
		setEditId(id); // whatever you clicked there u should have an input filed with a svae button
		setNewText(preText);
	};
	const handleSave = (id) => {
		dispatch(editTodo(id, newText));
		setEditId(null);
	};
	return (
		<VStack>
			{todos.length === 0 ? (
				<Text>No Todos Yet!!</Text>
			) : (
				todos.map((todo) => {
					return (
						<HStack>
							{editId == todo.id ? (
								<>
									<Input
										value={newText}
										onChange={(e) => setNewText(e.target.value)}
									/>
									<Button onClick={() => handleSave(todo.id)}>Save</Button>
								</>
							) : (
								<>
									<Text>{todo.task}</Text>
									<Button
										size={"sm"}
										colorPalette={"blue"}
										onClick={() => handleEdit(todo.id, todo.task)}
									>
										Edit
									</Button>
								</>
							)}

							<Button
								size={"sm"}
								colorPalette={"red"}
								onClick={() => dispatch(removeTodo(todo.id))}
							>
								<FaTrash />
							</Button>
						</HStack>
					);
				})
			)}
		</VStack>
	);
};

export default TodoList;
