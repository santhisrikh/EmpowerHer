import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { todoReducer } from "./reducers/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = createStore(
	todoReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);
// reducer (mandatory)
// pre loaded sttae (optional)
// middleware = >redux thunk (async operation) ,redux logger (developer tools)
