import { combineReducers } from "redux";
import { DEC_COUNT, INC_COUNT } from "../actions/actions";

const initialState = { count: 0 };
const counterReducer = (state = initialState, action) => {
	console.log(action, "in reducer");
	switch (action.type) {
		case INC_COUNT:
			return { ...state, count: state.count + action.payload };
		case DEC_COUNT:
			return { ...state, count: state.count - action.payload };
		default:
			return state;
	}
};
export default counterReducer;
