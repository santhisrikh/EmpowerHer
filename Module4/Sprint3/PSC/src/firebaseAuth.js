import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// google sign-in

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, googleProvider);
		const user = result.user;
		// store user in local storage
		localStorage.setItem("user", JSON.stringify(user));
		return user;
	} catch (error) {
		console.log("sign-in error", error);
	}
};

export const logOut = async () => {
	try {
		await signOut(auth);
		localStorage.removeItem("user");
	} catch (error) {
		console.error("Signout Error:", error);
	}
};
