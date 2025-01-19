import React from "react";

export default function Filters(props) {
	return (
		<div>
			<button onClick={() => props.handleSort()}>SortByDistance</button>
			<select
				name=""
				id=""
				onChange={(e) => props.handleRating(e.target.value)}
			>
				<option value={0}>All</option>
				<option value={3}>3+</option>
				<option value={4}>4+</option>
				<option value={5}>5</option>
			</select>
		</div>
	);
}
