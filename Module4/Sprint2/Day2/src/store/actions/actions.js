export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const TOGGLE_THEME = "TOGGLE_THEME";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
// action creators =>simple functions

export const incCount = (value) => {
	return {
		type: INC_COUNT,
		payload: value,
	};
};
export const decCount = (value) => {
	return {
		type: DEC_COUNT,
		payload: value,
	};
};
export const toggleTheme = () => {
	return {
		type: TOGGLE_THEME,
	};
};
export const addToCart = (value) => {
	return {
		type: ADD_CART_ITEM,
		payload: value,
	};
};
export const removeFromCart = (value) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: value,
	};
};
// thunk
// api calls =>post,get
