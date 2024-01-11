import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home-page";

function App() {
	return (
		<div>
			<h1>Nav</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
