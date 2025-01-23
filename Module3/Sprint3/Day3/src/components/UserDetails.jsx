import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
	const { userId, id } = useParams(); //id of the user dynamoc routing
	console.log(userId, id);
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((res) => setUser(res.data))
			.catch((err) => setError(err.response ? err.response.data : err.message))
			.finally(setLoading(false));
	}, []);

	// if (!login) {
	// 	navigate("/login");
	// }
	return (
		<div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{user && (
				<>
					<div>
						<h1>Username:{user.username}</h1>
						<p>Address : {user.address.street}</p>
						<p>City : {user.address.city}</p>
						<p>Company:{user.company.name}</p>
					</div>
					<button onClick={() => navigate(-1)}>Go back</button>
				</>
			)}
		</div>
	);
};

export default UserDetails;
