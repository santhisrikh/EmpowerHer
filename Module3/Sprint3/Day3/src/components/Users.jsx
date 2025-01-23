import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "../styles/Users.css";
import { AuthContext } from "../context/ContextProvider";
const Users = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	// saerch query s
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
	// console.log(searchParams.get("q")); //gra
	console.log(searchQuery, "search");

	useEffect(() => {
		setLoading(true);
		let url = `https://jsonplaceholder.typicode.com/users`;
		if (searchQuery) {
			url = `https://jsonplaceholder.typicode.com/users?q=${searchQuery}`;
		}
		axios
			.get(url)
			.then((res) => setUsers(res.data))
			.catch((err) => setError(err.response ? err.response.data : err.message))
			.finally(setLoading(false));
	}, [searchQuery]);

	const handleSearchQuery = (e) => {
		const { value } = e.target;
		setSearchQuery(value);
		setSearchParams(value ? { q: value } : {});
	};

	return (
		<div className="users-container">
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<input
				type="text"
				placeholder="Enter search keyword"
				value={searchQuery}
				onChange={handleSearchQuery}
			/>
			{users.length > 0 &&
				users.map((user) => {
					return (
						<div key={user.id} className="user-card">
							<div>
								<h1>{user.name}</h1>
								<p>{user.email}</p>
							</div>
							<Link to={`/users/${user.id}`}>
								<button>View Details</button>
							</Link>
						</div>
					);
				})}
		</div>
	);
};

export default Users;
