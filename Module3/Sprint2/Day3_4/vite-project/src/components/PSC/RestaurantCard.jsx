import React from "react";

export default function RestaurantCard({ ele }) {
	// console.log(ele, "props");
	return (
		<div className="card">
			<div>
				<img src={ele.image} alt={ele.name} />
			</div>
			<div>
				<h2>{ele.name}</h2>
				<p>Rating : {ele.rating}</p>
				<p>Distance in KM : {ele.distance}</p>
			</div>
		</div>
	);
}
