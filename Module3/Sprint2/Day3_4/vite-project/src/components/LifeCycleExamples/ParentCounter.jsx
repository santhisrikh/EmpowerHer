import { useState } from "react";
import { Counter } from "./Counter";
import { Timer } from "./Timer";

export const ParentCounter = () => {
	const [showCounter, setShowCounter] = useState(true);

	return (
		<>
			{showCounter && <Timer />}
			<button onClick={() => setShowCounter(!showCounter)}>
                
				{showCounter ? "Hide" : "Show"}
			</button>
		</>
	);
};
