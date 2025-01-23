import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h1>404</h1>
			<p>Page Not Found</p>
			<Link to="/"> Go Home</Link>
		</div>
	);
};

export default NotFound;
