import React from "react";
import Counter from "./components/Counter";
import CounterCustom from "./components/CounterCustom";
import GithubSearch from "./components/GithubSearch";

const App = () => {
	return (
		<div>
			<CounterCustom />
			<GithubSearch />
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
