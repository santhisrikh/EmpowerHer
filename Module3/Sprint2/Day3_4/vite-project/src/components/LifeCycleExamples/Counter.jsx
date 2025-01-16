// useState = > [state,setState] = useState(initState)
// useEffect = >
// useEffect(
// 	() => {}, // callback function
// 	[], // dependency array
// );

import { useEffect, useState } from "react";

export const Counter = ({id}) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("santhi");
	// this is the mounting phase of the component
	useEffect(() => {
		console.log(
			"I'm inside useEffect, I'll be visible only in the first render",
		);
		// api calls default data to be displayed
		return () => {
			console.log("I will be logged when the component unmouts");
		};
	}, []);
	// updating phase => change the state or chnage props re render
	useEffect(() => {
		console.log(
			"I'm inside useEffect, I'll be visible if the component mounts and whenver the state chnages",
			count,
		);
		return () => {
			console.log("clean up before the effect re-runs or unmouts", count);
		};
	}, [count,id]);
	//
	// unmounting phsase

	return (
		<>
			<p>Count : {count} </p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</>
	);
};

// useEffect(callback Fn,[])
// useEffect(()=>{
//     return clean up function {
//         unmounting phase
//     }
//     // steInterval
//     // setTime out
//     //
// })
// 