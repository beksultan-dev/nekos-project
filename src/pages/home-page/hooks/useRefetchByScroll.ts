import { showConner } from "@/shared/lib/showSonner";
import { useInView } from "react-intersection-observer";

export const useRefetchByScroll = (refetch: any) => {
	const { ref, inView } = useInView({
		initialInView: false,
		onChange(inView) {
			if (inView) {
				refetch();

				showConner({ text: "New images loaded", variant: "success" });
			}
		},
	});

	return { ref, inView };
};
