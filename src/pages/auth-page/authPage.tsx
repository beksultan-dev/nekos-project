import { ButtonUI } from "@/common/button/button";
import { Input } from "@/common/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useGetAuthUser } from "../../hooks/useGetAuthUser";
import s from "./authPage.module.css";

export const AuthPage = () => {
	const { pathname } = useLocation();
	const { email, pass, loginWithEmail, loginWithGoogle, registerWithEmail } = useAuth();
	const data = useGetAuthUser();

	if ((pathname === "/login" || pathname === "/register") && data?.isAuth) {
		return <Navigate to="/" />;
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<div className={s.container}>
				<ButtonUI className="fz20" onClick={loginWithGoogle}>
					Sign up with Google
				</ButtonUI>
				<div className="mb-5 text-center mt-2 text-base">or continue with</div>

				<div className="mb-2">
					<label htmlFor="auth_email">Email address</label>
					<Input
						onChange={email.onChange}
						value={email.inputValue}
						type="text"
						id="auth_email"
						placeholder="Email"
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
					/>
				</div>

				<ButtonUI
					className={pathname !== "/login" ? "fz20green" : "fz20blue"}
					onClick={pathname === "/login" ? loginWithEmail : registerWithEmail}
				>
					{pathname === "/login" ? "Sign In" : "Sign up"}
				</ButtonUI>
				{pathname === "/login" ? (
					<>
						<Link to={"/"} className="mt-6 text-sm hover:underline w-fit">
							Forget your password?
						</Link>
						<Link
							to={"/register"}
							className="text-sm text-green-400 hover:underline w-fit"
						>
							Don't have an account? Sign up
						</Link>
					</>
				) : (
					<>
						<Link
							to={"/login"}
							className="text-sm hover:underline text-blue-400 w-fit mt-4"
						>
							Aready have an account? Sign In
						</Link>
					</>
				)}
			</div>
		</div>
	);
};
