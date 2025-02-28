import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/order-success" element={<OrderSuccess />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);

export default App;
