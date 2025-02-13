import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/actions/actions";

const AddTodo = () => {
	const [task, setTask] = useState("");
	const dispatch = useDispatch();
	const handleAdd = (e) => {
		e.preventDefault();
		const newTodo = { task: task, completed: false };
		dispatch(addTodos(newTodo));
	};
	return (
		<form action="" onSubmit={handleAdd}>
			<input
				type="text"
				placeholder="Enter task "
				onChange={(e) => setTask(e.target.value)}
			/>
			<input type="submit" value="add" />
		</form>
	);
};

export default AddTodo;
