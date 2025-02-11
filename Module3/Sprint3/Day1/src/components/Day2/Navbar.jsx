import React, { useContext } from "react";
import { ThemeContext, UserContext } from "./Context/ContextProvider";

export default function Navbar({ count }) {
	const data = useContext(UserContext); // consuming the data
	const { theme, toggleTheme } = useContext(ThemeContext); // consume theme conetxt
	return (
		<>
			<div
				style={{
					backgroundColor: theme == "dark" ? "#333" : "#fff",
					color: theme == "dark" ? "#fff" : "#000",
				}}
			>
				<h3>Welcome {data.username} to Navbar</h3>
				<h2>Role : {data.userRole}</h2>
				<button onClick={toggleTheme}>
					{theme === "light" ? "Switch to Dark" : "Switch to light"}
				</button>
			</div>
		</>
	);
}
