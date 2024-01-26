import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";
import { useAuth } from "@/pages/auth-page/hooks/useAuth";
import { useAppSelector } from "@/store/hooks/hooks";
import { Globe } from "lucide-react";
import { useId, useRef } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
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
		passConfirm,
	} = useAuth();
	const { currentUser } = useAppSelector((state) => state.userPreferenses);
	const emailId = useId();
	const passId = useId();
	const passConfirmId = useId();

	if ((pathname === "/auth/login" || pathname === "/auth/register") && currentUser) {
		return <Navigate to="/" />;
	}

	if (pathname === "/auth/reset-pass" && !currentUser) {
		return <ResetPassPage email={email} resetPassByMail={resetPassByMail} />;
	} else if (currentUser) {
		return <Navigate to="/user-profile" />;
	}

	return (
		<>
			<Button
				className="gap-2 bg-blue-600 text-base hover:bg-blue-700 hover:text-white"
				onClick={loginWithGoogle}
			>
				<Globe /> Sign up with Google
			</Button>
			<div className="mb-5 mt-2 text-center text-base">or continue with</div>

			<div className="mb-6">
				<label htmlFor={emailId}>Email address</label>
				<Input
					onChange={email.onChange}
					value={email.inputValue}
					type="email"
					id={emailId}
					placeholder="Email"
					className="mt-1 bg-zinc-300 text-sm text-black "
				/>
			</div>
			{pathname === "/auth/register" ? (
				<>
					<div className="mb-2">
						<label htmlFor={passId}>Password</label>
						<Input
							value={pass.inputValue}
							onChange={pass.onChange}
							type="password"
							id={passId}
							placeholder="Password"
							className="mt-1 bg-zinc-300 text-sm text-black "
						/>
					</div>
					<div className="mb-6">
						<label htmlFor={passConfirmId}>Confirm Password</label>
						<Input
							value={passConfirm.inputValue}
							onChange={passConfirm.onChange}
							type="password"
							id={passConfirmId}
							placeholder="Password"
							className="mt-1 bg-zinc-300 text-sm text-black "
						/>
					</div>
				</>
			) : (
				<div className="mb-6">
					<label htmlFor={passId}>Password</label>
					<Input
						value={pass.inputValue}
						onChange={pass.onChange}
						type="password"
						id={passId}
						placeholder="Password"
						className="mt-1 bg-zinc-300 text-sm text-black"
					/>
				</div>
			)}

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
					<Link to={"/auth/reset-pass"} className="mt-6 w-fit text-sm hover:underline">
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
