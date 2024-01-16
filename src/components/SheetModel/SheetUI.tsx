import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetPortal,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useThemeCustom } from "@/hooks/useThemeCustom";
import s from "./SheetUI.module.css";

interface Props {
	className: string;
	children: React.ReactNode;
	trigger_text: string;
	content_title: string;
}

export const SheetUI = ({ className, children, trigger_text, content_title }: Props) => {
	const { cls } = useThemeCustom();

	return (
		<>
			<Sheet>
				<SheetTrigger style={{ outline: "none" }} className={`${s[className]}`}>
					{trigger_text}
				</SheetTrigger>
				<SheetPortal>
					<SheetContent className={s[cls]}>
						<SheetHeader>
							<SheetTitle style={{ fontSize: "28px" }}>
								{content_title}
							</SheetTitle>
							{children}
						</SheetHeader>
					</SheetContent>
				</SheetPortal>
			</Sheet>
		</>
	);
};
