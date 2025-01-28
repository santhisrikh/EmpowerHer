import React, { createContext, useState, useEffect } from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
	// lazy loading
	const [isAuthenticated, setAuthenticated] = useState(() => {
		return localStorage.getItem("token") ? true : false;
	});
	const [token, setToken] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		console.log(location, "in context");
	}, [location]);
	useEffect(() => {
		console.log(token);
	}, [token]);
	// this will take token from Login page and set the auth status and token
	const login = (authToken) => {
		console.log(token);
		setAuthenticated(true);
		setToken(authToken);
		localStorage.setItem("token", authToken);
		navigate(location.state.from || "/");
		// set the authentication true
		// set the token
		// navigate me to home
	};
	const logout = () => {
		setToken(null);
		setAuthenticated(false);
		localStorage.removeItem("token");

		navigate("/login");
		// set the authentication false
		// set the token to null
		// navigate the user  to login
	};

	return (
		<AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
