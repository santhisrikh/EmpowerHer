import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log("firebase is connected");
console.log(
	import.meta.env.VITE_FIREBASE_NAME,
	import.meta.env.VITE_FIREBASE_API_KEY,
);
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DATABASE_URL = firebaseConfig.databaseURL;
