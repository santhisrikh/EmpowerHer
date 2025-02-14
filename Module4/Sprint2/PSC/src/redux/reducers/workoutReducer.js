import {
	FETCH_CATEGORIES,
	FETCH_WORKOUTS_SUCCESS,
	FETCH_WORKOUTS_LOADING,
} from "../actions/actions";

const initState = { workouts: [], categories: [], loading: true };

export const workoutReducer = (state = initState, action) => {
	let updatedState;
	switch (action.type) {
		case FETCH_WORKOUTS_LOADING:
			updatedState = { ...state, loading: true };
			return updatedState;
		case FETCH_WORKOUTS_SUCCESS:
			updatedState = { ...state, workouts: action.payload, loading: false };
			return updatedState;
		case FETCH_CATEGORIES:
			updatedState = { ...state, categories: action.payload };
			return updatedState;

		default:
			return state;
	}
};
