import {
	SIGN_OUT,
	SIGNIN_SUCCESS,
	SIGNUP_SUCCESS,
} from "../actions/authActions";

const initState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
};

export const authReducer = (state = initState, action) => {
	console.log(action);
	switch (action.type) {
		case SIGNUP_SUCCESS:
		case SIGNIN_SUCCESS:
			localStorage.setItem("user", JSON.stringify(action.payload)); //save the user to local storage
			return { ...state, user: action.payload };
		case SIGN_OUT:
			localStorage.removeItem("user");
			return { ...state, user: null };
		default:
			return state;
	}
};
