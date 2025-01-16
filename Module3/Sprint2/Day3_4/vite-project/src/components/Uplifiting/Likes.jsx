import React from "react";

export default function Likes({  handleLike }) {
	return (
		<div>
			<button onClick={handleLike}>Like</button>
		</div>
	);
}

