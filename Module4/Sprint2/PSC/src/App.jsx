import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/ui/workouts/pages/Home";
import Navbar from "./components/ui/workouts/common/Navbar";
import Workouts from "./components/ui/workouts/pages/Workouts";
import { Container } from "@chakra-ui/react";

const App = () => {
	return (
		<div>
			<Navbar />
			<Container fluid mt={8}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/workouts" element={<Workouts />} />
				</Routes>
			</Container>
		</div>
	);
};

export default App;

// have your packages installed properly
// follow chakr aui doc
// have the basic setup ready
// provider,
//
