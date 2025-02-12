import { legacy_createStore as createStore } from "redux";
import { todoReducer } from "./reducers/todoReducers";

export const store = createStore(todoReducer);
