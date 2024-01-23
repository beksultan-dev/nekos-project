import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/common/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

interface Props {
	children: React.ReactNode;
}

export const SheetModal = ({ children }: Props) => {
	return (
		<>
			<Sheet>
				<SheetTrigger className="py-1dark:border-white flex items-center gap-2 rounded border-black px-2 hover:underline">
					<SlidersHorizontal />
					preferences
				</SheetTrigger>
				<SheetContent className="border-primary bg-zinc-200 dark:bg-zinc-800">
					<SheetHeader>
						<SheetTitle className="text-[28px]">Age rating</SheetTitle>
						{children}
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	);
};
