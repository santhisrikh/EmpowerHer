import React from "react";
import Navbar from "./components/ui/features/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</>
	);
};

export default App;
