import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrementCount,
	incrementCount,
	incByAmount,
} from "../redux/counterSlice";

const Counter = () => {
	// useSelector
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => dispatch(incrementCount())}>Inc</button>
			<button onClick={() => dispatch(decrementCount())}>Dec</button>
			<button onClick={() => dispatch(incByAmount(5))}>+5</button>
		</div>
	);
};

export default Counter;
