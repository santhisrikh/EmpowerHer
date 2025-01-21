import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";
export default function Layout() {
	return (
		<>
			<Navbar count={2} />
			<Sidebar />
			<Main />
		</>
	
	);
}
