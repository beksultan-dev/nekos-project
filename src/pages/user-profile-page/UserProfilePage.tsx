import { useAuth } from "@/shared/hooks/useAuth";
import { useGetAuthUser } from "@/shared/hooks/useGetAuthUser";
import { Navigate, useLocation } from "react-router-dom";
import { RandomImagesList } from "./components/random-images-list/random-images-list";
import { UserProfileInfo } from "./components/user-profile-info/user-profile-info";
import { useGetLikes } from "./hooks/useGetLikes";

export type UserModel = ReturnType<typeof useGetAuthUser>;

export const UserProfilePage = () => {
	const user = useGetAuthUser();
	const { logOut } = useAuth();
	const { pathname } = useLocation();
	const likes = useGetLikes();

	if (pathname === "/user-profile" && !user) {
		return <Navigate to="/auth/register" />;
	}

	const placeHolder =
		"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

	return (
		<div className="flex h-max w-full justify-center text-base">
			<div className="flex h-max w-full justify-between gap-6 p-16">
				<UserProfileInfo logOut={logOut} user={user} placeHolder={placeHolder} />
				<RandomImagesList likes={likes.likes} />
			</div>
		</div>
	);
};
