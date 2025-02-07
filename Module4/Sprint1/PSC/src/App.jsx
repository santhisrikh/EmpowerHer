import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Login from "./Pages/Login";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/quiz" element={<Quiz />} />
		</Routes>
	);
};

export default App;
