import { AuthPage } from "@/pages/auth-page/authPage";
import { HomePage } from "@/pages/home-page/HomePage";
import { NotFoundPage } from "@/pages/not-found-page/NotFoundPage";
import { UserProfilePage } from "@/pages/user-profile-page/UserProfilePage";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { HomeLayout } from "./layouts/HomeLayout";

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeLayout />}>
					<Route index element={<HomePage />} />
					<Route path="user-profile" element={<UserProfilePage />} />
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
