import { ButtonUI } from "@/common/button/button";
import { Input } from "@/common/ui/input";
import { useInput } from "@/hooks/useInput";

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
					className="mt-1"
				/>
			</div>

			<ButtonUI className={"fz20green"} onClick={resetPassByMail}>
				Send confirmation email
			</ButtonUI>
		</>
	);
};
