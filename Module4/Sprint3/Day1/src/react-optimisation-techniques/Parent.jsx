import React, { lazy, useState, Suspense } from "react";
// import Child from "./Child";

const Child = lazy(() => import("./Child"));
const Parent = () => {
	const [showComponent, setShowComponent] = useState(false);
	return (
		<div>
			<h1>React Lazy Loading</h1>
			<button onClick={() => setShowComponent(true)}>Load Component</button>
			<Suspense fallback={<h2>Loading...</h2>}>
				{showComponent && <Child />}
			</Suspense>
		</div>
	);
};

export default Parent;
