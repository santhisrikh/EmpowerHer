import React from "react";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import Cart from "./Components/Cart";
const App = () => {
	return (
		<div>
			<Counter />
			<Theme />
			<Cart />
		</div>
	);
};

export default App;


// react-redux
// Provider store = {store}