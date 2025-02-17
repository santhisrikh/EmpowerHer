import React, { useEffect, useState } from "react";
import useDebounce from "../customHooks/useDebounce";

const GithubSearch = () => {
	const [query, setQuery] = useState("");
	const [results, setRes] = useState([]);
	console.log(results);
	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const fetchUsers = async (searchTerm) => {
		if (!searchTerm) {
			setRes([]);
			return;
		}
		try {
			const response = await fetch(
				`https://api.github.com/users?q=${searchTerm}`,
			);
			const data = await response.json();
			setRes(data);
		} catch (err) {
			console.log(err);
		}
	};
	const debounce = useDebounce(fetchUsers, 500);
	useEffect(() => {
		debounce(fetchUsers(query));
	}, [query]);
	return (
		<div>
			<h1>Github user Search</h1>
			<input
				type="text"
				placeholder="Enter Search Keyword"
				value={query}
				onChange={handleChange}
			/>
		</div>
	);
};

export default GithubSearch;

// input filed
// serach by some key word
//
// debouncing
// delay => user stops for 500ms or 1000ms
// useDebounce
//
// const debounce = useDebounce(callback,delay)
