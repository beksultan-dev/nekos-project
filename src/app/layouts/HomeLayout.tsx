import { Navigation } from "@/common/layout/navigation/navigation";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
		</>
	);
};
