import { Button } from "../ui/button";
import s from "./ButtonUI.module.css";

interface Props {
	children: React.ReactNode;
	action: () => void;
	className: string;
}

export const ButtonUI = ({ children, action, className }: Props) => {
	return (
		<Button variant="outline" className={s[className]} onClick={action}>
			{children}
		</Button>
	);
};
