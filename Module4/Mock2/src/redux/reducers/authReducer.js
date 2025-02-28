// import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";

// Initial State
const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
};

// Actions
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

// Action Creators
// export const setUser = (user) => ({ type: SET_USER, payload: user });

export const loginWithGoogle = () => async (dispatch) => {
	const provider = new GoogleAuthProvider();
	const result = await signInWithPopup(auth, provider);
	localStorage.setItem("user", JSON.stringify(result.user));
	dispatch({ type: SET_USER, payload: result.user });
};

export const logout = () => async (dispatch) => {
	await signOut(auth);
	localStorage.removeItem("user");

	dispatch({ type: LOGOUT });
};

// Reducer
export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			
			return { ...state, user: action.payload };
		case LOGOUT:
			return { ...state, user: null };
		default:
			return state;
	}
}
