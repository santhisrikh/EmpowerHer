import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { postReducer } from "./reducers/postReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	posts: postReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
