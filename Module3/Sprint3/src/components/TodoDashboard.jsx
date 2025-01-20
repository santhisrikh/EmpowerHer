import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoDashboard() {
	const [todos, setTodos] = useState([]);
	const [newTask, setNewTask] = useState("");
	// handleEdit
	const [editTitle, setEditTitle] = useState("");
	const [editTaskId, setEditTaskId] = useState(null);
	// loading
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	// error
	//
	// mounting
	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = () => {
		setIsLoading(true);
		setError(null);
		axios({
			url: `http://localhost:3000/todos`,
			method: "GET",
		})
			.then((res) => setTodos(res.data))
			.catch((error) => {
				setError(error.response ? error.response.data : error.message);
			})
			.finally(setIsLoading(false));
	};
	//
	// const fetchTodos = () => {
	// 	setIsLoading(true);
	// 	setError(null);
	// 	fetch(`http://localhost:3000/todos`)
	// 		.then((res) => {
	// 			console.log(res, "res");
	// 			// addition check to server errors / 404 not founf , 500 internal server
	// 			if (!res.ok) {
	// 				throw new Error("Failed to get the tasks"); // non 2##
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((res) => setTodos(res))
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 			setError(err.message); //set the error
	// 		})
	// 		.finally(setIsLoading(false));
	// };
	const handleAdd = () => {
		axios({
			url: `http://localhost:3000/todos`,
			method: "POST",
			data: {
				id: Math.ceil(Math.random() * 500).toString(),
				title: newTask,
				completed: false,
			},
		})
			.then((res) => setTodos([...todos, res.data]))
			.catch((error) => {
				setError(error.response ? error.response.data : error.message);
			})
			.finally(setIsLoading(false));
	};

	// const handleAdd = () => {
	// 	// alert("task added");
	// 	// post request
	// 	fetch(`http://localhost:3000/todos`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			id: Math.ceil(Math.random() * 500),
	// 			title: newTask,
	// 			completed: false,
	// 		}),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			// setTodos([...todos, res]); //locally synching th e stat ewith the new item
	// 			fetchTodos(); // another get request post adding each new item
	// 			setNewTask("");
	// 		});
	// };
	console.log(error);

	// Patch request
	const handleEdit = (id) => {
		axios({
			url: `http://localhost:3000/todos/${id}`,
			method: "PATCH",
			data: {
				title: editTitle,
			},
		})
			.then((res) => console.log(res.data))
			.then((res) => {
				fetchTodos();
				// let updatedTodos = todos.map((ele) =>
				// 	ele.id == res.data.id ? res.data : ele,
				// );
				// setTodos(updatedTodos);
				setEditTaskId(null);
				setEditTitle("");
			});
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Enter new task item"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
			/>
			<button onClick={handleAdd}>Add Task</button>
			{error && <h1>{error}</h1>}
			{isLoading ? (
				<h1>Loading....</h1>
			) : (
				<ul>
					{todos.map((ele) => {
						return (
							<React.Fragment key={ele.id}>
								{/* <li>{ele.title}</li>
								<button>Edit</button> */}
								<li>
									{editTaskId == ele.id ? (
										<div>
											<input
												type="text"
												value={editTitle}
												onChange={(e) => setEditTitle(e.target.value)}
											/>
											<button onClick={() => handleEdit(ele.id)}>Save</button>{" "}
											//patch request
										</div>
									) : (
										<div>
											{ele.title}
											<button
												onClick={() => {
													setEditTitle(ele.title);
													setEditTaskId(ele.id);
												}}
											>
												Edit
											</button>
										</div>
									)}
								</li>
							</React.Fragment>
						);
					})}
				</ul>
			)}
		</div>
	);
}

// 1.get all the todos

// server error =>404 , 500 =>error.response
// netwrok error=>wifi is not working, server is not runninh =>response =>error.message

// fetch => axios
// json=>payload, error handling,
// create =>post
// edit
// delete
