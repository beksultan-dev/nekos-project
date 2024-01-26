import { Skeleton } from "@/common/ui/skeleton";
import { Image } from "lucide-react";

export const ImageLoader = () => {
	return (
		<div className="flex h-full w-full items-center justify-center space-x-4">
			<Skeleton className="h-20 w-20 rounded-sm bg-transparent">
				<Image className="h-full w-full" />
			</Skeleton>
		</div>
	);
};
