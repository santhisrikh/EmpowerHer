import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const sliceName = createSlice({
// 	name: "sliceName",
// 	initialState: { count: 0 },
// 	reducers: {
// 		actionName: (state, action) => {
// 			state.count = state.count + 1;
// 		},
// 		actionName: (state, action) => {
// 			state.count = state.count - 1;
// 		},
// 	},
// });

const todoSlice = createSlice({
	name: "todo",
	initialState: { todos: [] },
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
		},
		toggleTodo: (state, action) => {
			state.count = state.count - 1;
		},
		deleteTodo: (state, action) => {
			state.count = state.count + action.payload;
		},
	},
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
