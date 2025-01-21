import React, { useContext } from "react";
import { ThemeContext, UserContext } from "./Context/ContextProvider";

export default function Settings() {
	const user = useContext(UserContext);
	const { theme } = useContext(ThemeContext);
	return <h3>{user.username} This is Settings Page</h3>;
}
