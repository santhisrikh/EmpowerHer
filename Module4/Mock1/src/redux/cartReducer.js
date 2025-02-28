import {
	FETCH_PRODUCTS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY,
	PLACE_ORDER,
} from "./actions";

const initialCartState = { items: [], totalPrice: 0 };

// Cart Reducer
export const cartReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id,
			);
			console.log(existingItem, "exisitin gcartitem");
			if (existingItem) {
				// Update quantity if item already exists
				return {
					...state,
					items: state.items.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: item.quantity + 1 }
							: item,
					),
				};
			} else {
				// Add new item to cart with quantity = 1
				return {
					...state,
					items: [...state.items, { ...action.payload, quantity: 1 }],
				};
			}

		case "REMOVE_FROM_CART":
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};

		case "UPDATE_QUANTITY":
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: action.payload.quantity }
						: item,
				),
			};
		case "PLACE_ORDER":
			return {
				...state,
				items: [],
			};

		default:
			return state;
	}
};
