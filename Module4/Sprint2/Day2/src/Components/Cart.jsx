import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions/actions";

const Cart = () => {
	const items = useSelector((state) => state.cart.items);
	console.log(items);
	const dispatch = useDispatch();
	return (
		<div>
			<h3>Cart Items : {items.length} </h3>
			<button
				onClick={() =>
					dispatch(addToCart({ id: 1, name: "added item", price: 200 }))
				}
			>
				Add Item to the Cart
			</button>
			<button onClick={() => dispatch(removeFromCart(1))}>
				Remove from cart
			</button>
		</div>
	);
};

export default Cart;
