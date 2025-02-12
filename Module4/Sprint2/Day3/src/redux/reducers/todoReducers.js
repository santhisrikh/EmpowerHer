import { ADD_TODO, EDIT_TODO, REMOVE_TODO } from "../actions/actions";

const initState = {
	todos: [{ id: 1, task: "Buy Groceries", completed: false }],
};
export const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_TODO:
			const updatedTodos = {
				...state,
				todos: [...state.todos, action.payload],
			};
			return updatedTodos;

		case REMOVE_TODO:
			const todos = {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
			return todos;
		case EDIT_TODO:
			const editedTodos = {
				...state,
				todos: state.todos.map((todo) =>
					todo.id == action.payload.id
						? { ...todo, task: action.payload.text }
						: todo,
				),
			};
			return editedTodos;

		default:
			return state;
	}
};
