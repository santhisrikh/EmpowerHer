import React from "react";
// import Counter from "./components/Counter";
// import CounterCustom from "./components/CounterCustom";
// import GithubSearch from "./components/GithubSearch";
// import { Theme } from "./components/Theme";
import ReactMemo from "./react-optimisation-techniques/ReactMemo";
import Parent from "./react-optimisation-techniques/Parent";
import ReactLazyEx from "./react-optimisation-techniques/ReactLazyEx";

const App = () => {
	return (
		<div>
			{/* <CounterCustom />
			<GithubSearch />
			<Theme /> */}
			{/* <ReactMemo /> */}
			{/* <UseMemo /> */}
			<Parent />
			<ReactLazyEx />
		</div>
	);
};

export default App;

// reduces the boiler plate code
// action.js=>no reducer
// comple x steup =>thunk middle are etc.,
// mutability isuses=>
// initState = {
// todo:[],
// count:0,
// isloading:false,
// isError:false}
// Immer (RTK)
// todo []
// add a new todo
// state.todo.push(action.payload)
//
