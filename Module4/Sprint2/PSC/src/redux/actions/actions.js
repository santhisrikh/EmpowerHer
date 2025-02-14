import axios from "axios";
export const FETCH_WORKOUTS_LOADING = "FETCH_WORKOUTS_LOADING";

export const FETCH_WORKOUTS_SUCCESS = "FETCH_WORKOUTS_SUCCESS";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchWorkouts =
	(category = "") =>
	async (dispatch) => {
		// dispatch loading action
		dispatch({ type: FETCH_WORKOUTS_LOADING });
		try {
			const response = await axios.get(
				`http://localhost:5002/workouts?category=${category}`,
			);
			dispatch({ type: FETCH_WORKOUTS_SUCCESS, payload: response.data });
		} catch (error) {
			// dispath error action
		}
	};
export const fetchCategories = () => async (dispatch) => {
	const response = await axios.get("http://localhost:5002/categories");
	dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};
