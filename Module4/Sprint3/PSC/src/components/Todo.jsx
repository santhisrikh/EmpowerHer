import React, { useEffect, useState } from "react";

const Todo = () => {
	const [newTask, setNewtask] = useState("");
	const [data, setData] = useState([]);
	const fetchTodos = async () => {
		try {
			const response = await fetch(
				`https://react-todo-firebase-a3317-default-rtdb.firebaseio.com/todos.json`,
			);
			const todos = await response.json();
			const result = Object.entries(todos);
			console.log(result);
			// let newRes = result.map((arr) => ({ id: arr[0], ...arr[1] }));
			let newRes = result.map(([key, value]) => ({ id: key, ...value }));
			console.log(newRes);
			setData(newRes);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchTodos();
	}, []);
	const addTodo = async () => {
		if (!newTask.trim()) {
			return;
		}
		const newTodo = { task: newTask, completed: false };
		const response = await fetch(
			`https://react-todo-firebase-a3317-default-rtdb.firebaseio.com/todos.json`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newTodo),
			},
		);
		if (response.ok) {
			setNewtask("");
			fetchTodos();
		}
	};
	return (
		<>
			{/* add-todo */}
			<div>
				<input
					type="text"
					placeholder="Enter Todo"
					value={newTask}
					onChange={(e) => setNewtask(e.target.value)}
				/>
				<button onClick={addTodo}>Add task</button>
			</div>
			<div>
				{data.length > 0 && (
					<ul>
						{data.map((todo) => (
							<li>{todo.task}</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default Todo;
