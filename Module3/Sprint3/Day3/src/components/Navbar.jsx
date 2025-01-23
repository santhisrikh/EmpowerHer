import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../context/ContextProvider";
const Navbar = () => {
	const { login, handleLogin, handleLogout } = useContext(AuthContext);
	return (
		<nav className="navbar">
			<NavLink to="/" className="nav-link">
				Home
			</NavLink>
			<NavLink to="/about" className="nav-link">
				About
			</NavLink>
			<NavLink to="/users" className="nav-link">
				Users
			</NavLink>
			<NavLink to="/contact" className="nav-link">
				Contact
			</NavLink>
			{login ? (
				<button onClick={handleLogout}>Log Out</button>
			) : (
				<button onClick={handleLogin}>Login</button>
			)}
		</nav>
	);
};

export default Navbar;
