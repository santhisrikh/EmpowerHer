import React from "react";
import useLocalStorage from "../customHooks/useLocalStorage";
export const Theme = () => {
	// const [theme, setTheme] = React.useState("light");
	const [theme, setTheme] = useLocalStorage("theme", "light");
	const [user, setUser] = useLocalStorage("user", "santhi");
	return (
		<div
			style={{
				padding: "10px",
				background: theme == "dark" ? "#333" : "#fff",
				color: theme === "dark" ? "#fff" : "#000",
			}}
		>
			<h2>Theme Swicther</h2>
			<button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
				ToggleTheme
			</button>
			<h1>{user}</h1>
			<button onClick={() => setUser("Masai")}>Set User</button>
		</div>
	);
};


