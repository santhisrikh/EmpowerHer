import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";

export const store = createStore(authReducer, applyMiddleware(thunk));
