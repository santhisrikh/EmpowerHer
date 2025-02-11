import React, { useState } from "react";
// import { legacy_createStore as createStore } from "redux";
import "./App.css";
import { INC_COUNT, DEC_COUNT } from "./actions";
import { store } from "./store";
import Name from "./Name";
import Counter from "./Counter";

//1️⃣ create action constants
// const INC_COUNT = "INC_COUNT";
// const DEC_COUNT = "DEC_COUNT";

// // reducer
// const initState = 10;
// const reducerFn = (state = initState, action) => {
// 	console.log(state, action, "redcer funtion");
// 	switch (action.type) {
// 		case INC_COUNT:
// 			return state + 1;
// 		case DEC_COUNT:
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// };
// Create a store
// createStore given by redux
// const store = createStore(reducerFn);

const App = () => {
	// const [count, setCount] = useState(store.getState().count);
	// console.log(store.getState()); // {count:0}
	// //store provided by redux
	// //
	// store.subscribe(() => {
	// 	setCount(store.getState().count);
	// });
	// console.log(count, "in app compo");
	return (
		<>
			<Counter />
			<Name />
		</>
	);
};

export default App;

// getState()=>
// dispatch(actionObj) =>
// subscribe

