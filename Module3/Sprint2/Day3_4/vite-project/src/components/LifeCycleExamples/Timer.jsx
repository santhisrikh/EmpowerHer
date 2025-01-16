import { useEffect, useState } from "react";

export const Timer = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let interval = setInterval(() => {
			console.log("counter is running....");
			setCount((prevCount) => prevCount + 1);
		}, 2000);
		return () => {
			clearInterval(interval);
			console.log("cleaning upthe timer");
		};
	}, [count]);
	return (
		<>
			<p>timer : {count}</p>
		</>
	);
};

// 
