import React from "react";

export default function Dislikes({handleDislike}) {
	return (
		<div>
			<button onClick={handleDislike}>Dislike</button>
		</div>
	);
}
