import { useThemeCustom } from "@/hooks/useThemeCustom";
import { Button } from "../ui/button";
import s from "./ButtonUI.module.css";

interface Props {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
}

export const ButtonUI = ({
	children,
	onClick,
	className = "",
	disabled = false,
}: Props) => {
	const { cls } = useThemeCustom();

	return (
		<Button
			variant="outline"
			className={`${s[cls]} ${s[className]}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};
