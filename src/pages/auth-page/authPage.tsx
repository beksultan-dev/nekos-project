import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";
import { useAuth } from "@/shared/hooks/useAuth";
import { Globe } from "lucide-react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useGetAuthUser } from "../../shared/hooks/useGetAuthUser";
import { ResetPassPage } from "./components/reset-pass/reset-pass";

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

	if ((pathname === "/auth/login" || pathname === "/auth/register") && data) {
		return <Navigate to="/" />;
	}

	if (pathname === "/auth/reset-pass" && !data) {
		return <ResetPassPage email={email} resetPassByMail={resetPassByMail} />;
	} else if (data) {
		return <Navigate to="/user-profile" />;
	}

	return (
		<>
			<Button
				className="gap-2 bg-blue-600 text-base hover:bg-blue-700"
				onClick={loginWithGoogle}
			>
				<Globe /> Sign up with Google
			</Button>
			<div className="mb-5 mt-2 text-center text-base">or continue with</div>

			<div className="mb-3">
				<label htmlFor="auth_email">Email address</label>
				<Input
					onChange={email.onChange}
					value={email.inputValue}
					type="email"
					id="auth_email"
					placeholder="Email"
					className="mt-1 text-sm text-black dark:text-white"
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
					className="mt-1 text-sm text-black dark:text-white"
				/>
			</div>

			<Button
				className={
					pathname === "/auth/login"
						? "bg-slate-700 text-base hover:bg-slate-600 hover:text-white"
						: "bg-green-800 text-base hover:bg-green-700 hover:text-white"
				}
				onClick={pathname === "/auth/login" ? loginWithEmail : registerWithEmail}
			>
				{pathname === "/auth/login" ? "Sign In" : "Sign up"}
			</Button>
			{pathname === "/auth/login" ? (
				<>
					<Link
						to={"/auth/reset-pass"}
						className="mt-6 w-fit text-sm hover:underline"
					>
						Forget your password?
					</Link>
					<Link
						to={"/auth/register"}
						className="w-fit text-sm text-green-400 hover:underline"
					>
						Don't have an account? Sign up
					</Link>
				</>
			) : (
				<>
					<Link
						to={"/auth/login"}
						className="mt-4 w-fit text-sm text-blue-400 hover:underline"
					>
						Aready have an account? Sign In
					</Link>
				</>
			)}
		</>
	);
};
