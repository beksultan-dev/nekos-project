import { ButtonUI } from "@/common/button/button";
import { useAuth } from "@/hooks/useAuth";
import { useGetAuthUser } from "@/hooks/useGetAuthUser";
import { Img } from "react-image";
import { Navigate } from "react-router-dom";
import s from "./UserProfilePage.module.css";
import { useGetLikes } from "./hooks/useGetLikes";

export const UserProfile = () => {
	const user = useGetAuthUser();
	const queryData = useGetLikes();
	const { logOut } = useAuth();

	if (!user) {
		return <Navigate to="/register" />;
	}

	const placeHolder =
		"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

	return (
		<div className="w-full h-full flex justify-center">
			<div className={s.container}>
				<div className="flex justify-between mb-8">
					<div className={s.picture}>
						<Img src={user?.photo || placeHolder}></Img>
					</div>
					<div>{user.email}</div>
					{user.name && <div>{user.name}</div>}
					<ButtonUI className="fz20" onClick={logOut}>
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
