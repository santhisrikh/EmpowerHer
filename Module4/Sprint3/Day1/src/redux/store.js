// import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";

// const store = createStore(ReducerType, "middleare");

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todo: todoReducer,
	},
});
