import { useRef } from "react";

export const useDebounce = (callback, delay) => {
	console.log(callback, delay, "inside hook");
	const timeoutRef = useRef(null);
	const debounce = (...args) => {
		console.log(args, "arguments inside hook");
		console.log(timeoutRef.current, "this is related to id");
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(callback(...args), delay);
	};
	return debounce;
};
