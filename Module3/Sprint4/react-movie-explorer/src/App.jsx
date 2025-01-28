import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import MovieDetails from "./Pages/MovieDetails";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";

const App = () => {
	return (
		<div>
			{/* Navbar */}
			<Navbar />
			{/* <h1>React Movie Explorer</h1> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/movies"
					element={
						<PrivateRoute>
							<Movies />
						</PrivateRoute>
					}
				/>
				<Route
					path="/movies/:id"
					element={
						<PrivateRoute>
							<MovieDetails />
						</PrivateRoute>
					}
				/>
				<Route
					path="/add-movie"
					element={
						<PrivateRoute>
							<AddMovie />
						</PrivateRoute>
					}
				/>
				<Route
					path="/edit-movie/:id"
					element={
						<PrivateRoute>
							<EditMovie />
						</PrivateRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* all routes go inside */}
			{/* Footer */}
			{/* <Footer/> */}
		</div>
	);
};

export default App;
