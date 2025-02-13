import React from "react";

const TodoItem = (props) => {
	console.log(props);
	return <li>{props.todo.task}</li>;
};

export default TodoItem;
