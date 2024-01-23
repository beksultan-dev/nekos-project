import { RotateCw } from "lucide-react";
import s from "./index.module.css";

export const Loading = () => {
	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<RotateCw className="animate-spin" size={72} />
		</div>
	);
};
