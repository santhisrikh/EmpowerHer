import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_TODOS_SUCCESS, fetchTodos } from "../../redux/actions/actions";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	const loading = useSelector((state) => state.loading);
	const error = useSelector((state) => state.error);
	console.log(todos);
	// todos from store
	// loading
	// error
	useEffect(() => {
		dispatch(fetchTodos());
	}, []);

	return (
		<div className="todo-container">
			<h2>Todo List</h2>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<ul>
				{todos.length > 0 &&
					todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
			</ul>
		</div>
	);
};

export default TodoList;
