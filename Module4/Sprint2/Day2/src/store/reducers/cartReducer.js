import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../actions/actions";

const initialState = { items: [] };

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART_ITEM:
			return { ...state, items: [...state.items, action.payload] };
		case REMOVE_CART_ITEM:
			const updatedItems = state.items.filter(
				(item) => item.id != action.payload,
			);
			return { ...state, items: updatedItems };

		default:
			return state;
	}
};
