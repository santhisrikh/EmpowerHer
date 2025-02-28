import {
	FETCH_PRODUCTS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UPDATE_QUANTITY,
	PLACE_ORDER,
} from "./actions";

const initialProductState = { products: [], loading: false, error: null };

// Product Reducer
export const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};
