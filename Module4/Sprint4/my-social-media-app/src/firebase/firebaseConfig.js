// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log("firebase config");
const firebaseConfig = {
	apiKey: "AIzaSyBkKmbAqYV5u8SKmNkbS86WEMWlvlbkwYU",
	authDomain: "react-redux-social-media-95810.firebaseapp.com",
	projectId: "react-redux-social-media-95810",
	storageBucket: "react-redux-social-media-95810.firebasestorage.app",
	messagingSenderId: "590053827238",
	appId: "1:590053827238:web:b2002afebb6f0b32438a67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
