// Action Constants
// loading
// success =>res.data
// failuere=>
//
import axios from "axios";
export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR";

export const POST_TODOS_LOADING = "POST_TODOS_LOADING";
export const POST_TODOS_SUCCESS = "POST_TODOS_SUCCESS";
export const POST_TODOS_ERROR = "POST_TODOS_ERROR";
// add Todo
const addTodo = () => ({
	type: "ADD_TODO",
	payload: "buy cloths",
});
//
export const fetchTodos = () => (dispatch) => {
	dispatch({ type: FETCH_TODOS_LOADING });
	axios
		.get("https://polarized-torpid-clam.glitch.me/todos")
		.then((res) => {
			dispatch({ type: FETCH_TODOS_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: FETCH_TODOS_ERROR, payload: err }));
};
export const addTodos = (newTodo) => (dispatch) => {
	dispatch({ type: POST_TODOS_LOADING });
	axios
		.post("https://polarized-torpid-clam.glitch.me/todos", newTodo)
		// .then((res) => console.log(res.data))
		.then((res) => {
			dispatch({ type: POST_TODOS_SUCCESS, payload: res.data });
			dispatch(fetchTodos());
		})

		.catch((err) => dispatch({ type: POST_TODOS_ERROR, payload: err }));
};

//
// function fetchTodos() {
// 	return { type: "ghjk", payload: "fghj" };
// }

// // asynch
// function fetchTodosAsynch() {
// 	return function (dispatch) {
// 		// loading
// 		// success
// 		// failure
// 	};
// }
