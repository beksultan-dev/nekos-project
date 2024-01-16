import { Navigation } from "@/common/navigation";
import { HomePage } from "@/pages/home-page/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};
