import { ButtonUI } from "@/common/button/button";
import { Input } from "@/common/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useThemeChange } from "@/hooks/useThemeChange";
import { ChevronLeft } from "lucide-react";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useGetAuthUser } from "../../hooks/useGetAuthUser";
import s from "./AuthPage.module.css";
import { ResetPassPage } from "./components/reset-pass/reset-pass";

export const AuthLayout = () => {
	const { theme } = useThemeChange();
	const { cls } = useThemeChange("container", "containerlight");
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleBack = () => {
		if (pathname === "/auth/reset-pass") {
			navigate("/auth/login");
		} else {
			navigate("/");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen">
			<div className={s[cls]}>
				<ButtonUI className="authBack" onClick={handleBack}>
					<ChevronLeft
						size={40}
						className={theme === "light" ? "text-black" : "text-white"}
					/>
				</ButtonUI>
				<Outlet />
			</div>
		</div>
	);
};

export const AuthPage = () => {
	const { pathname } = useLocation();
	const {
		email,
		pass,
		loginWithEmail,
		loginWithGoogle,
		registerWithEmail,
		resetPassByMail,
	} = useAuth();
	const data = useGetAuthUser();

	if ((pathname === "/auth/login" || pathname === "/auth/register") && data.isAuth) {
		return <Navigate to="/" />;
	}

	if (pathname === "/auth/reset-pass") {
		return <ResetPassPage email={email} resetPassByMail={resetPassByMail} />;
	}

	return (
		<>
			<ButtonUI className="fz20" onClick={loginWithGoogle}>
				Sign up with Google
			</ButtonUI>
			<div className="mb-5 text-center mt-2 text-base">or continue with</div>

			<div className="mb-3">
				<label htmlFor="auth_email">Email address</label>
				<Input
					onChange={email.onChange}
					value={email.inputValue}
					type="email"
					id="auth_email"
					placeholder="Email"
					className="mt-1"
				/>
			</div>
			<div className="mb-6">
				<label htmlFor="auth_pass">Password</label>
				<Input
					value={pass.inputValue}
					onChange={pass.onChange}
					type="password"
					id="auth_pass"
					placeholder="Password"
					className="mt-1"
				/>
			</div>

			<ButtonUI
				className={pathname !== "/auth/login" ? "fz20green" : "fz20blue"}
				onClick={pathname === "/auth/login" ? loginWithEmail : registerWithEmail}
			>
				{pathname === "/auth/login" ? "Sign In" : "Sign up"}
			</ButtonUI>
			{pathname === "/auth/login" ? (
				<>
					<Link
						to={"/auth/reset-pass"}
						className="mt-6 text-sm hover:underline w-fit"
					>
						Forget your password?
					</Link>
					<Link
						to={"/auth/register"}
						className="text-sm text-green-400 hover:underline w-fit"
					>
						Don't have an account? Sign up
					</Link>
				</>
			) : (
				<>
					<Link
						to={"/auth/login"}
						className="text-sm hover:underline text-blue-400 w-fit mt-4"
					>
						Aready have an account? Sign In
					</Link>
				</>
			)}
		</>
	);
};
