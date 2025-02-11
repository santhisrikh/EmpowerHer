import React, { useContext } from "react";
import { UserContext } from "./Context/ContextProvider";

export default function Sidebar() {
	const user = useContext(UserContext);
	return <h3>Welcome {user.username} to Sidebar</h3>;
}
