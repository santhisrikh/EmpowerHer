import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import notesReducer from "./reducers/notesReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	notes: notesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
