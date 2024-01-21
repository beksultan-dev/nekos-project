import { ButtonUI } from "@/common/button/button";
import { useTheme } from "@/common/ui/theme-provider";
import { useAuth } from "@/hooks/useAuth";
import { useGetAuthUser } from "@/hooks/useGetAuthUser";
import { useThemeChange } from "@/hooks/useThemeChange";
import { Img } from "react-image";
import { Navigate, useLocation } from "react-router-dom";
import s from "./UserProfilePage.module.css";
import { useGetLikes } from "./hooks/useGetLikes";

export const UserProfile = () => {
	const user = useGetAuthUser();
	const { logOut } = useAuth();
	const queryData = useGetLikes();
	const { pathname } = useLocation();
	const { cls } = useThemeChange("container", "containerlight");

	if (pathname === "/user-profile" && !user.isAuth) {
		return <Navigate to="/auth/register" />;
	}

	const placeHolder =
		"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

	return (
		<div className="w-full h-full flex justify-center">
			<div className={s[cls]}>
				<div className="flex justify-between mb-8">
					<div className={s.picture}>
						<Img src={user?.photo || placeHolder}></Img>
					</div>
					<div>{user.email}</div>
					{user.name && <div>{user.name}</div>}
					<ButtonUI className="fz20blue" onClick={logOut}>
						Sign out
					</ButtonUI>
				</div>

				<div className={s.grid}>
					{queryData.likes?.map((elem) => (
						<div key={elem.id} className={s.griditem}>
							<Img src={elem.data.image_url} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
