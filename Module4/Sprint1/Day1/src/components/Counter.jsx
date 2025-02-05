import React, { useReducer, useState } from "react";

// const initState = {email:"",password:""}
const initState = { count: 10 };

// const reducerFn = (state, action) => {
// 	if (action.type == "increment") {
// 		return { count: state.count + action.payload };
// 	} else if (action.type == "decrement") {
// 		return { count: state.count - action.payload };
// 	} else {
// 		return state;
// 	}
// };
const reducerFn = (state, action) => {
	console.log(state, action, "reducer fn");
	switch (action.type) {
		case "increment":
			return { count: state.count + action.payload };
		case "decrement":
			return { count: state.count - action.payload };
		default:
			return state;
	}
};

const Counter = () => {
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducerFn, initState);

	return (
		<div>
			<h1>Count : {state.count}</h1>
			<button
				onClick={() =>
					dispatch({
						type: "increment",
						payload: 4,
					})
				}
			>
				Inc
			</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
				Dec
			</button>
		</div>
	);
};

export default Counter;
