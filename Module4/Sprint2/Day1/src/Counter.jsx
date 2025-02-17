import React, { useState } from "react";
import { store } from "./store";
import { INC_COUNT, DEC_COUNT } from "./actions";
const Counter = () => {
	const [count, setCount] = useState(store.getState().count);
	//store provided by redux

	store.subscribe(() => {
		console.log(store.getState().count); // {count:0}
		setCount(store.getState().count);
	});
	const handleInc = () => {
		store.dispatch({ type: INC_COUNT, payload: 10 });
		// setCount(store.getState().count);
	};
	// console.log(count, "in app compo");
	return (
		<div className="app-container">
			<h1>{count}</h1>
			<button onClick={handleInc}>Inc</button>
			<button onClick={() => store.dispatch({ type: DEC_COUNT })}>Dec</button>
		</div>
	);
};

export default Counter;

// create store
//
// action(user is inyercated with the UI)=>store.dispatch()

// theme
// user
// CombineReducer
// react-redux library
// const [state,dispatch] = useReducer()
// useSelector
// useDispatch
