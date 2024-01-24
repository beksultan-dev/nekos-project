import { Button } from "@/common/ui/button";
import { ChevronLeft } from "lucide-react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleBack = () => {
		if (pathname === "/auth/reset-pass") {
			navigate("/auth/login");
		} else {
			navigate("/");
		}
	};

	if (pathname === "/auth") {
		return <Navigate to={"/auth/login"} />;
	}

	return (
		<div className="flex h-screen items-center justify-center bg-zinc-300 *:text-white dark:bg-zinc-900">
			<div className="relative flex w-[500px] flex-col rounded-sm bg-gray-800 p-5">
				<Button
					className="absolute left-[-90px] top-4 h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-600 hover:text-white"
					onClick={handleBack}
					size={"icon"}
				>
					<ChevronLeft size={40} />
				</Button>
				<Outlet />
			</div>
		</div>
	);
};
