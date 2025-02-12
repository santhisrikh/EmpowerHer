// action constant
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
// action creator

export const addTodo = (todoObj) => {
	return {
		type: ADD_TODO,
		payload: todoObj,
	};
};

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	payload: id,
});

export const editTodo = (id, updatedText) => ({
	type: EDIT_TODO,
	payload: { id, text: updatedText },
});
