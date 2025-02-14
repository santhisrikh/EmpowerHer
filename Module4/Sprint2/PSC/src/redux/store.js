import { composeWithDevTools } from "@redux-devtools/extension";
import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { workoutReducer } from "./reducers/workoutReducer";

const rootReducer = combineReducers({
	fitness: workoutReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
