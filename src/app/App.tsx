import { Navigation } from "@/common/navigation/navigation";
import { AuthPage } from "@/pages/auth-page/authPage";
import { HomePage } from "@/pages/home-page/HomePage";
import { NotFoundPage } from "@/pages/not-found-page/NotFoundPage";
import { UserProfile } from "@/pages/user-profile-page/UserProfilePage";
import { Outlet, Route, Routes } from "react-router-dom";

export const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="user-profile" element={<UserProfile />} />
				</Route>
				<Route path="/login" element={<AuthPage />} />
				<Route path="/register" element={<AuthPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};
