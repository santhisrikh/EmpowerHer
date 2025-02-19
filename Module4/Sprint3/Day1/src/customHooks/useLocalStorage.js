// import React, { useEffect, useState } from "react";

// const useLocalStorage = (key, initialValue) => {
// 	const [storedValue, setStoredValue] = useState(() => {
// 		const item = window.localStorage.getItem(key);
// 		return item ? JSON.parse(item) : initialValue;
// 	});
// 	useEffect(() => {
// 		window.localStorage.setItem(key, JSON.stringify(storedValue));
// 	}, [key, storedValue]);
// 	return [storedValue, setStoredValue];
// };

// export default useLocalStorage;
