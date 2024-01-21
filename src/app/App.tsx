import { AuthLayout, AuthPage } from "@/pages/auth-page/AuthPage";
import { HomeLayout, HomePage } from "@/pages/home-page/HomePage";
import { NotFoundPage } from "@/pages/not-found-page/NotFoundPage";
import { UserProfile } from "@/pages/user-profile-page/UserProfilePage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<HomePage />} />
					<Route path="user-profile" element={<UserProfile />} />
				</Route>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="login" element={<AuthPage />} />
					<Route path="register" element={<AuthPage />} />
					<Route path="reset-pass" element={<AuthPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};
