import React, { useState } from "react";
import { useCounter } from "../customHooks/useCounter";

const CounterCustom = () => {
	const { count, increment, decrement, reset } = useCounter();

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Inc</button>
			<button onClick={decrement}>Dec</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default CounterCustom;
