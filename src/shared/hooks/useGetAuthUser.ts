import { UserModel } from "../../pages/auth-page/hooks/useAuth";

export const useGetAuthUser = () => {
	if (localStorage.getItem("auth") === null) return;

	const { email, name, photo, userId, isAuth }: UserModel = JSON.parse(
		localStorage.getItem("auth") as string,
	);
	return { userId, name, email, photo, isAuth };
};
