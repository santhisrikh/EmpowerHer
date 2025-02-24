import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";

export const signin = (email, password, navigate) => async (dispatch) => {
	try {
		const userCredentials = await signInWithEmailAndPassword(
			auth,
			email,
			password,
		);
		dispatch({ type: SIGNIN_SUCCESS, payload: userCredentials.user });
		console.log(userCredentials, "user");
		navigate("/");
	} catch (error) {
		console.error("Sigin error:", error);
	}
};

export const signup = (email, password) => async (dispatch) => {
	try {
		const userCredentials = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = userCredentials.user;
		dispatch({ type: SIGNUP_SUCCESS, payload: user });
	} catch (error) {
		console.error("Signup Error:", error);
	}
};
export const signout = () => async (dispatch) => {
	try {
		await signOut(auth);
		dispatch({ type: SIGN_OUT });
	} catch (error) {
		console.error("Signout Error:", error);
	}
};
