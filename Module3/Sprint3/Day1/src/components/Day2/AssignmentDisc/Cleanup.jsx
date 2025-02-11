import React, { useState, useEffect } from "react";

function Timer() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
			console.log("Running...");
		}, 1000);
		return () => {
			console.log(
				"the clean up function runs if the compoennt mounts are the effect re runs",
				count,
			);
			clearInterval(interval);
		}; // Increment every second
	}, [count]); // Effect runs only once (on mount)
	console.log("count", count);
	return <p>Timer: {count}</p>;
}

export default function CleanupEx() {
	const [showTimer, setShowTimer] = useState(true);

	return (
		<div>
			{showTimer && <Timer />}
			<button onClick={() => setShowTimer(!showTimer)}>
				{showTimer ? "Unmount Timer" : "Mount Timer"}
			</button>
		</div>
	);
}

// mount
// useEffect(()=>{},[])
// useEffect(()=>{},[state,props])
// useEffect(()=>{return ()=>{}},[])
