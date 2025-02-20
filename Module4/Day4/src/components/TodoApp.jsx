// src/TodoApp.js
import { useState } from "react";

const TodoApp = () => {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	const addTask = () => {
		if (task.trim() === "") {
			return;
		}
		setTasks([...tasks, { text: task, completed: false }]);
		setTask("");
	};

	const toggleTask = (index) => {
		const newTasks = tasks.map((t, i) =>
			i === index ? { ...t, completed: !t.completed } : t,
		);
		setTasks(newTasks);
	};

	const deleteTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div>
			<h1>Todo App</h1>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Enter a task"
			/>
			<button onClick={addTask}>Add Task</button>
			<ul data-testid="list">
				{tasks.map((t, index) => (
					<li key={index}>
						<span
							style={{ textDecoration: t.completed ? "line-through" : "none" }}
						>
							{t.text}
						</span>
						<button onClick={() => toggleTask(index)}>
							{t.completed ? "Undo" : "Complete"}
						</button>
						<button onClick={() => deleteTask(index)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoApp;
