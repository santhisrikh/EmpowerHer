import React, { useRef, useState } from "react";

const Timer = () => {
	const intervalRef = useRef(null);
	const [seconds, setSeconds] = useState(0);
	const handleStart = () => {
		intervalRef.current = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);
	};
	console.log(intervalRef.current);
	const handleStop = () => {
		clearInterval(intervalRef.current);
	};
	console.log(seconds, "seconds");
	return (
		<div>
			<h3>Timer :{seconds} </h3>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
};

export default Timer;

// useReducer;
// fomr with multiple inputs 
// error handling

// useState = >[state,setState] = useState(initState)