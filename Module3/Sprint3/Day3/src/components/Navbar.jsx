import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
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
		</nav>
	);
};

export default Navbar;
