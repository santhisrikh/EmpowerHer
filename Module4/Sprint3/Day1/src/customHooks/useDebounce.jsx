import React, { useRef } from "react";

const useDebounce = (callback, delay) => {
	// useRef
	const timeoutRef = useRef(null);
	// {current:null}
	const debounce = (...args) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			callback(...args);
		}, delay);
	};
	return debounce;
};

export default useDebounce;
