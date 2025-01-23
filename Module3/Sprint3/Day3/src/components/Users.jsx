import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Users.css";
const Users = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((res) => setUsers(res.data))
			.catch((err) => setError(err.response ? err.response.data : err.message))
			.finally(setLoading(false));
	}, []);

	return (
		<div className="users-container">
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{users.length  &&
				users.map((user) => {
					return (
						<div key={user.id} className="user-card">
							<div>
								<h1>{user.name}</h1>
								<p>{user.email}</p>
							</div>
							<Link to={`/users/${user.id}/${user.name}`}>
								<button>View Details</button>
							</Link>
						</div>
					);
				})}
		</div>
	);
};

export default Users;
