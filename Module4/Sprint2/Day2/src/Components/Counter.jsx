import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	decCount,
	incCount,
} from "../store/actions/actions";

const Counter = () => {
	// useSelector = >to read your relevant state from the store
	// store.getState()
	const count = useSelector((state) => state.count.count);
	const dispatch = useDispatch();
	console.log(count, "in counter Component");
	return (
		<div>
			<h1> {count}</h1>
			<button onClick={() => dispatch(incCount(2))}>Inc</button>
			{/* <button onClick={() => dispatch({ type: INC_COUNT, payload: 2 })}>
				Inc
			</button> */}

			<button onClick={() => dispatch(decCount(3))}>Dec</button>
		</div>
	);
};

export default Counter;
