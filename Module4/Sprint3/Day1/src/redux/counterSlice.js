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

const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		incrementCount: (state, action) => {
			state.count = state.count + 1;
		},
		decrementCount: (state, action) => {
			state.count = state.count - 1;
		},
		incByAmount: (state, action) => {
			state.count = state.count + action.payload;
		},
	},
});

export const { incrementCount, decrementCount, incByAmount } =
	counterSlice.actions;
export default counterSlice.reducer;
