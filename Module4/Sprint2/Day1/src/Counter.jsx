import React, { useState } from "react";
import { store } from "./store";
import { INC_COUNT, DEC_COUNT } from "./actions";
const Counter = () => {
	const [count, setCount] = useState(store.getState().count);
	console.log(store.getState()); // {count:0}
	//store provided by redux
	//
	store.subscribe(() => {
		setCount(store.getState().count);
	});
	console.log(count, "in app compo");
	return (
		<div className="app-container">
			<h1>{count}</h1>
			<button onClick={() => store.dispatch({ type: INC_COUNT, payload: 10 })}>
				Inc
			</button>
			<button onClick={() => store.dispatch({ type: DEC_COUNT })}>Dec</button>
		</div>
	);
};

export default Counter;
