import React, { createContext, useState } from "react";

export const UserContext = createContext(); // created the context
export const ThemeContext = createContext();

export default function ContextProvider({ children }) {
	// const [user,setUser] = useState()
	const [theme, setTheme] = useState("light");
	const user = {
		username: "John",
		userEmail: "jon@gmail.com",
		userRole: "Admin",
	};
	// API call
	// login credentilas
	// reqres =>
	const toggleTheme = () => {
		console.log("button clicked");
		setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
		// setTheme
	};
	// theme
	//
	return (
		<UserContext.Provider value={{ ...user, adminName: "santhi" }}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				{children}
			</ThemeContext.Provider>
		</UserContext.Provider>
	);
}

