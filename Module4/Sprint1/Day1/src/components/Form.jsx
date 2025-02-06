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
const formReducerFn = (state, actionObj) => {
	console.log(actionObj, "inside reducer Fn");
	switch (actionObj.type) {
		case "UPDATE_FIELDS":
			return {
				...state,
				[actionObj.payload.name]: actionObj.payload.value,
			};
		case "SET_ERRORS":
			return {
				...state,
				errors: { ...state.errors, ...actionObj.payload },
			};
		case "SET_SUBMITTING":
			return {
				...state,
				isSubmitting: actionObj.payload,
			};
	}
};

const Form = () => {
	const [state, dispatch] = useReducer(formReducerFn, initState);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		// action
		const UPDATE_FIELDS = "UPDATE_FIELDS";
		let actionObj = { type: UPDATE_FIELDS, payload: { name, value } };
		dispatch(actionObj);
	};
	const validateForm = () => {
		const errorsList = {};
		if (!state.name) errorsList.name = "Name is Required";
		if (!state.email) errorsList.email = "Email is required";
		if (!state.password) errorsList.password = "Password is required";
		return errorsList;
	};

	// handling submit
	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = validateForm();
		console.log(Object.keys(errors));
		if (Object.keys(errors).length > 0) {
			let actionObj = { type: "SET_ERRORS", payload: errors };
			dispatch(actionObj);
		} else {
			let actionObj = {
				type: "SET_SUBMITTING",
				payload: true,
			};
			dispatch(actionObj);
		}
		// alert("from submitted successfully");
		// dispatch()
		// error handling
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
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
				<input type="submit" value="Sign up" />
			</form>
		</div>
	);
};

export default Form;
