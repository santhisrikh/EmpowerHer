import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

const App = () => {
	return (
		<>
			<Container>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<Todos />} />
				</Routes>
			</Container>
		</>
	);
};

export default App;
