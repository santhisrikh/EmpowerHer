import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Contact from "./components/Contact";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<div>
			<h1>React Routing</h1>
			<Navbar />
			<Routes>
				{/* keep all the components */}
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/users" element={<Users />} />
				{/* <Route path="/posts" element={<Users />} />
				<Route path="/posts/:postId" element={<Users />} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="/users/:userId/:id" element={<UserDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;

// Routes
