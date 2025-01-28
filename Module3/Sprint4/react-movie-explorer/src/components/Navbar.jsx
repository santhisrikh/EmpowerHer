import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

const Navbar = () => {
	const { isAuthenticated, logout } = useContext(AuthContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		logout();
		// navigate("/login")
	};
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/movies" className="nav-link">
					Movies
				</Link>
			</div>
			<div className="navbar-login">
				{isAuthenticated ? (
					<button onClick={handleLogout}>Logout</button>
				) : (
					<button onClick={() => navigate("/login")}>Login</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
