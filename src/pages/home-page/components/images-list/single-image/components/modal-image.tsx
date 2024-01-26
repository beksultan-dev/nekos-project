import { Button } from "@/common/ui/button";
import { DialogContent, DialogHeader, DialogTrigger } from "@/common/ui/dialog";
import { Expand } from "lucide-react";

interface Props {
	fullImage: string;
}

export const ModalImage = ({ fullImage }: Props) => {
	return (
		<>
			<DialogTrigger asChild>
				<Button size={"icon"} className="hover:text-red-500">
					<Expand size={30} />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-h-screen overflow-hidden">
				<div className="overflow-hidden rounded-md">
					<img src={fullImage} className="max-h-full w-full object-cover" />
				</div>
			</DialogContent>
		</>
	);
};
