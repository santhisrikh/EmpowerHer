import React, { useCallback, useState } from "react";
import chroma from "chroma-js";
import { Counter } from "./Counter";

const Button = React.memo((props) => {
	console.log("button is called");
	return (
		<button
			style={{ backgroundColor: chroma.random().hex() }}
			onClick={props.handleClick}
		>
			Inc Count
		</button>
	);
});

const ReactMemo = () => {
	const [count, setCount] = useState(0);
	const [otherState, setOtherState] = useState(0);
	const handleCount = useCallback(() => {
		setCount(count + 1);
		console.log("handleCount is called");
	}, [count]);
	return (
		<div>
			<Counter count={count} />
			<Button handleClick={handleCount} />
			{/* <button onClick={() => setCount(count + 1)}>Incrment Count</button> */}
			<button onClick={() => setOtherState(otherState + 1)}>
				Change OtherState
			</button>
		</div>
	);
};

export default ReactMemo;
// React.memo
// useCallback
