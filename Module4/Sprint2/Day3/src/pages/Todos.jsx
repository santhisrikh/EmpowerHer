import React from "react";
import TodoForm from "../components/features/todo/TodoForm";
import TodoList from "../components/features/todo/TodoList";

const Todos = () => {
	return (
		<div>
			<TodoForm />
			<TodoList />
		</div>
	);
};

export default Todos;
