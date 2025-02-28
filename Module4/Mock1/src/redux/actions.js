import axios from "axios";

// Action Types
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";  //products page
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const PLACE_ORDER = "PLACE_ORDER";

// Fetch Products
export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get("https://fakestoreapi.com/products");
	dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

// Add to Cart
export const addToCart = (product) => ({
	type: ADD_TO_CART,
	payload: { ...product, quantity: 1 },
});

// Remove from Cart
export const removeFromCart = (id) => ({
	type: REMOVE_FROM_CART,
	payload: id,
});

// Update Quantity
export const updateQuantity = (id, quantity) => ({
	type: UPDATE_QUANTITY,
	payload: { id, quantity },
});

// Place Order
export const placeOrder = () => ({
	type: PLACE_ORDER,
});
