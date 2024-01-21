import { auth, googleProvider } from "@/config/firebase-config";
import {
	confirmPasswordReset,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useInput } from "./useInput";

export interface UserModel {
	userId: string;
	name: string | null;
	photo: string | null;
	email: string | null;
	isAuth: boolean;
}

export const useAuth = () => {
	const email = useInput();
	const pass = useInput();
	const navigate = useNavigate();

	const registerWithEmail = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				email.inputValue,
				pass.inputValue,
			);

			const userData: UserModel = {
				userId: user.user.uid,
				name: user.user.displayName,
				email: user.user.email,
				photo: user.user.photoURL,
				isAuth: true,
			};

			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/auth/user-profile");
		} catch (err) {
			console.log(err);
		}
	};

	const loginWithGoogle = async () => {
		try {
			const user = await signInWithPopup(auth, googleProvider);

			const userData: UserModel = {
				userId: user.user.uid,
				name: user.user.displayName,
				email: user.user.email,
				photo: user.user.photoURL,
				isAuth: true,
			};

			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	const loginWithEmail = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				email.inputValue,
				pass.inputValue,
			);

			const userData: UserModel = {
				userId: user.user.uid,
				name: user.user.displayName,
				email: user.user.email,
				photo: user.user.photoURL,
				isAuth: true,
			};

			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/auth/user-profile");
		} catch (err) {
			console.log(err);
		}
	};

	const resetPassByMail = async () => {
		try {
			await sendPasswordResetEmail(auth, email.inputValue);
			navigate("/auth/login");
		} catch (err) {
			console.log(err);
		}
	};

	const logOut = async () => {
		await signOut(auth);
		localStorage.removeItem("auth");
		navigate("/");
	};

	return {
		registerWithEmail,
		email,
		pass,
		loginWithGoogle,
		loginWithEmail,
		logOut,
		resetPassByMail,
	};
};
