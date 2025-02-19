import React, { lazy, Suspense, useState } from "react";
// import Assignments from "./Assignments";
// import Lectures from "./Lectures";
// import Problems from "./Problems";

const Assignments = lazy(() => import("./Assignments"));
const Problems = lazy(() => import("./Problems"));
const Lectures = lazy(() => import("./Lectures"));

const ReactLazyEx = () => {
	const [section, setSection] = useState(null);
	return (
		<div>
			<h1>Dahsboard</h1>
			<button onClick={() => setSection("assignments")}>
				Load Assignments
			</button>
			<button onClick={() => setSection("lectures")}>Load Lectures</button>
			<button onClick={() => setSection("problems")}>Load Problems</button>

			<Suspense fallback={<h2>Loading...</h2>}>
				{section == "assignments" && <Assignments />}
				{section == "lectures" && <Lectures />}
				{section == "problems" && <Problems />}
			</Suspense>
		</div>
	);
};

export default ReactLazyEx;
