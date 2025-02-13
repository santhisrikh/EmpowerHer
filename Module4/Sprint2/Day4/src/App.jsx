import React from "react";
import TodoList from "./components/todo/TodoList";
import AddTodo from "./components/todo/AddTodo";

const App = () => {
	return (
		<div>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;
