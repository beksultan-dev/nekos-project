import { Navigation } from "@/components/Navigation";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
