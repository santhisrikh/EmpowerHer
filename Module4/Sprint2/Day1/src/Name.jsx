import React, { useState } from "react";
import { store } from "./store";
import { SET_NAME } from "./actions";
const Name = () => {
	const [input, setInput] = useState("");
	const [name, setName] = useState(store.getState().name);
	store.subscribe(() => {
		setName(store.getState().name);
	});
	console.log(store.getState().name);
	return (
		<div className="app-container">
			<h3>{name ? `Hello ${name}` : "enter the name below"}</h3>
			<input
				type="text"
				placeholder="Enter name"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				onClick={() => store.dispatch({ type: SET_NAME, payload: input })}
			>
				Set Name
			</button>
		</div>
	);
};

export default Name;

// input field button=>
// print whaterver i type
