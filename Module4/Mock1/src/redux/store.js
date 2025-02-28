import {
	legacy_createStore as createStore,
	applyMiddleware,
	combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
	products: productReducer,
	cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
