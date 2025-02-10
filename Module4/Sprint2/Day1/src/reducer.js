import { INC_COUNT, DEC_COUNT, SET_NAME } from "./actions";
// reducer
const initState = { count: 0, name: "" };
const reducerFn = (state = initState, action) => {
	console.log(state, action, "redcer funtion");
	switch (action.type) {
		case INC_COUNT:
			return { ...state, count: state.count + action.payload };
		case DEC_COUNT:
			return { ...state, count: state.count - 1 };
		case SET_NAME:
			return { ...state, name: action.payload };
		default:
			return state;
	}
};
export default reducerFn;
