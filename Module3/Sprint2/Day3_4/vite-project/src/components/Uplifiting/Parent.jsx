import React, { useState } from "react";
import Likes from "./Likes";
import Dislikes from "./Dislikes";

export default function Parent() {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);

	return (
		<div>
			<Likes likes={likes} handleLike={() => setLikes(likes + 1)} />
			<Dislikes
				dislikes={dislikes}
				handleDislike={() => setDislikes(dislikes + 1)}
			/>
			<TotalLikes totalLikes={likes + dislikes} />
		</div>
	);
}

// Parent
// likes
// dislikes
