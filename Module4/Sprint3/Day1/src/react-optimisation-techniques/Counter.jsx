import React from "react";
import chroma from "chroma-js";
export const Counter = React.memo((props) => {
	console.log("counter rendered");
	const bgColor = chroma.random().hex();
	return (
		<h1 style={{ backgroundColor: bgColor, padding: "15px" }}>
			Count:{props.count}
		</h1>
	);
});
