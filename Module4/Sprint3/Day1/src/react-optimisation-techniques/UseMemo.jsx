import React, { useCallback, useMemo, useState } from "react";

const expensiveCalc = (count) => {
	console.log("running some expensive calculaitons");
	for (let i = 0; i < 100000000; i++) {
		// something doing
	}
	return count * 2;
};

const UseMemo = () => {
	const [count, setCount] = useState(0);
	const [otherState, setOtherState] = useState(0);
	// const computedValue = expensiveCalc(count);
	const computedValue = useMemo(() => expensiveCalc(count), [count]);
	return (
		<div>
			<h2>Count : {count}</h2>
			<h3>Computed Value : {computedValue}</h3>
			<button onClick={() => setCount(count + 1)}>Inc</button>
			<button onClick={() => setOtherState(otherState + 1)}>otherState</button>
		</div>
	);
};

export default UseMemo;

// React.memo => re rendeiring of child component if the prop doesn;t change
// useCallback =>

// React.lazy
