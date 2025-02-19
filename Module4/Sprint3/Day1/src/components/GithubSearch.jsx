import React, { useEffect, useState } from "react";
import { useDebounce } from "../customHooks/useDebounce";

const GithubSearch = () => {
	const [query, setQuery] = useState("");
	const [results, setRes] = useState([]);
	console.log(results);

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

	const handleChange = (e) => {
		setQuery(e.target.value);
		debounce(e.target.value, "another argument");
		// fetchUsers(e.target.value);
	};

	return (
		<div>
			<h1>Github user Search</h1>
			<input
				type="text"
				placeholder="Enter Search Keyword"
				value={query}
				onChange={handleChange}
			/>
			{/* {loading && <p>Loading...</p>} */}
			<ul>
				{results.map((user) => (
					<li key={user.id}>
						<a href={user.html_url} target="_blank" rel="noopener noreferrer">
							{user.login}
						</a>
					</li>
				))}
			</ul>
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

// Redux Tool Kit
// Custom hook
//

// React.memo
// useCalbackHook
// useMemo
// REact.lazy - suspense
// 