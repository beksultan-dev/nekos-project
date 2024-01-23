import { Button } from "@/common/ui/button";
import fetchErrorImg from "@/shared/assets/error.svg";
import { RefreshCw } from "lucide-react";
import { FallbackProps } from "react-error-boundary";

export const ErrorComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<div className="flex flex-col items-center">
				<img src={fetchErrorImg} className="size-60" alt="No Connection" />
				<Button
					size={"icon"}
					className="size-14 rounded-full hover:animate-spin "
					variant={"outline"}
					onClick={resetErrorBoundary}
				>
					<RefreshCw size={40} />
				</Button>
			</div>
		</div>
	);
};
