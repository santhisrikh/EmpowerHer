import React from "react";
import Navbar from "./components/ui/features/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./components/ui/features/Signup";
import Login from "./components/ui/features/Login";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
