import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD8fm0VJnBnCIGYJWV3yz5j0x55AyguXKI",
	authDomain: "nekos-11b2b.firebaseapp.com",
	projectId: "nekos-11b2b",
	storageBucket: "nekos-11b2b.appspot.com",
	messagingSenderId: "28603977440",
	appId: "1:28603977440:web:07fc9f68504441d6730a85",
	measurementId: "G-9GCQLZW3L1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
