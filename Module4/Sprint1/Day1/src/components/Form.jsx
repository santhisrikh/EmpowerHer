import React, { useReducer } from "react";

const initState = {
	email: "",
	name: "",
	password: "",
	mobileNo: "",
	errors: {
		name: "",
		email: "",
		password: "",
	},
	isSubmitting: "",
};
const formReducerFn = (state, action) => {
	switch (action.type) {
		case "UPDATE_FIELDS":
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};
	}
};
const Form = () => {
	const [state, dispatch] = useReducer(formReducerFn, initState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: "UPDATE_FIELDS", payload: { name, value } });
	};

	return (
		<div>
			<form>
				<input
					name="email"
					type="text"
					placeholder="Enter email"
					onChange={handleInputChange}
					value={state.email}
				/>
				<input
					name="name"
					type="text"
					placeholder="Enter name"
					onChange={handleInputChange}
					value={state.name}
				/>{" "}
				<input
					name="password"
					type="text"
					placeholder="Enter password"
					onChange={handleInputChange}
					value={state.password}
				/>{" "}
				<input
					name="mobileNo"
					type="text"
					placeholder="Enter mobileNo"
					onChange={handleInputChange}
					value={state.mobileNo}
				/>
			</form>
		</div>
	);
};

export default Form;
