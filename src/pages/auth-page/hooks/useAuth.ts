import { auth, googleProvider } from "@/shared/config/firebase-config";
import { showConner } from "@/shared/lib/showSonner";
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useInput } from "../../../shared/hooks/useInput";

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
	const passConfirm = useInput();
	const navigate = useNavigate();

	const registerWithEmail = async () => {
		try {
			if (pass.inputValue !== passConfirm.inputValue) {
				showConner({ text: "Password fields must match", variant: "error" });
				return;
			}

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

			showConner({ text: "New account successfully created", variant: "success" });
			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/user-profile");
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

			showConner({ text: "Login completed", variant: "success" });
			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/auth");
		} catch (err) {
			console.log(err);
		}
	};

	const loginWithEmail = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email.inputValue, pass.inputValue);

			const userData: UserModel = {
				userId: user.user.uid,
				name: user.user.displayName,
				email: user.user.email,
				photo: user.user.photoURL,
				isAuth: true,
			};

			showConner({ text: "Login completed", variant: "success" });
			localStorage.setItem("auth", JSON.stringify(userData));
			navigate("/user-profile");
		} catch (err) {
			console.log(err);
		}
	};

	const resetPassByMail = async () => {
		try {
			await sendPasswordResetEmail(auth, email.inputValue);
			showConner({ text: "Check your email", variant: "warning" });
			navigate("/auth/login");
		} catch (err) {
			console.log(err);
		}
	};

	const logOut = async () => {
		await signOut(auth);

		localStorage.removeItem("auth");
		localStorage.removeItem("user-likes");
		showConner({ text: "Logged out", variant: "success" });
		navigate("/");
	};

	return {
		email,
		pass,
		passConfirm,
		registerWithEmail,
		loginWithGoogle,
		loginWithEmail,
		logOut,
		resetPassByMail,
	};
};
