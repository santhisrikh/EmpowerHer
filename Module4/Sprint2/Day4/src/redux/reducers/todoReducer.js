import {
	FETCH_TODOS_LOADING,
	FETCH_TODOS_SUCCESS,
	POST_TODOS_LOADING,
	POST_TODOS_SUCCESS,
} from "../actions/actions";

const initState = { todos: [], loading: false, error: null };
export const todoReducer = (state = initState, action) => {
	console.log(state, action, "reducer");
	switch (action.type) {
		case FETCH_TODOS_LOADING:
			return { ...state, loading: true };
		case FETCH_TODOS_SUCCESS:
			return { ...state, todos: action.payload, loading: false };
		case POST_TODOS_LOADING:
			return { ...state, loading: true };
		case POST_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				todos: [...state.todos, action.payload],
			};
		//
		default:
			return state;
	}
};
