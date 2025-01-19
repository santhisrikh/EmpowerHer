import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { use } from "react";
import Filters from "./Filters";

export default function Restaurants() {
	// to set the the state of the restuarants
	const [restaurants, setRestaurants] = useState([]);
	// filtered data
	const [filteredRes, setFilteredRes] = useState([]);
	// state to handle rating
	const [ratingFilter, setRatingFilter] = useState(0);
	// state to handle sorting Distance
	const [sortDistance, setSortDistance] = useState(false);
	// to do the get request
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		fetch(`http://localhost:3000/data`)
			.then((res) => res.json())
			.then((res) => {
				setRestaurants(res);
				setFilteredRes(res);
			});
	}, []);
	// updating phase
	// []=>dependency array
	// [ratingFilter]
	useEffect(() => {
		let filtered = [...restaurants]; // crearting a new arestaurant array
		if (ratingFilter) {
			filtered = filtered.filter((ele) => ele.rating >= ratingFilter);
		}
		// sort the distnace
		if (sortDistance) {
			filtered = filtered.sort((a, b) => a.distance - b.distance);
		}
		// set the filtered data
		setFilteredRes(filtered);
	}, [ratingFilter, sortDistance]);

	// console.log()
	let itemsPerPage = 4;
	let totalPages = Math.ceil(filteredRes.length / itemsPerPage);
	let startIndex = (currentPage - 1) * itemsPerPage;
	let lastIndex = currentPage * itemsPerPage;
	let finalRest = filteredRes.slice(startIndex, lastIndex);

	return (
		<>
			<h1>Restaurants Finder</h1>
			{/* all filtering sorting */}
			<Filters
				handleRating={(rating) => setRatingFilter(rating)}
				handleSort={() => setSortDistance(!sortDistance)}
			/>
			<div className="container">
				{finalRest.length ? (
					finalRest.map((ele) => {
						return <RestaurantCard key={ele.id} ele={ele} />;
					})
				) : (
					<h1>No Results Found!!!</h1>
				)}
			</div>
			{/* Pagination */}
			<button onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
			<button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
		</>
	);
}
