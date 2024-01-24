import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";
import { useInput } from "@/shared/hooks/useInput";

interface Props {
	resetPassByMail: () => Promise<void>;
	email: ReturnType<typeof useInput>;
}

export const ResetPassPage = ({ resetPassByMail, email }: Props) => {
	return (
		<>
			<div className="mb-4">
				<label htmlFor="auth_email">Email address</label>
				<Input
					onChange={email.onChange}
					value={email.inputValue}
					type="email"
					id="auth_email"
					placeholder="Email"
					className="mt-1 bg-zinc-300 text-sm text-black"
				/>
			</div>

			<Button className="bg-slate-700  hover:bg-slate-600" onClick={resetPassByMail}>
				Send confirmation email
			</Button>
		</>
	);
};
