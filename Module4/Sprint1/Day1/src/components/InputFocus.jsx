import React, { useRef, useState } from "react";

const InputFocus = () => {
	const prevCount = useRef(0);
	const [count, setCount] = useState(0);
	const handleClick = () => {
		prevCount.current = count;
		setCount((prev) => prev + 200);
	};
	return (
		<div>
			<p>Prev Count{prevCount.current}</p>
			<p>Count {count}</p>
			<button onClick={handleClick}>Click</button>
		</div>
	);
};

export default InputFocus;

// game
// button clicks have happend
// counter => count:1=>2=>3
// prevCount=>
