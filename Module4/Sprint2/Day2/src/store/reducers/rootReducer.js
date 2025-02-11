import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import counterReducer from "./counterReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
	theme: themeReducer,
	count: counterReducer,
	cart: cartReducer,
});
