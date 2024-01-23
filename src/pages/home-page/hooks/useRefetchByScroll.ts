import { useInView } from "react-intersection-observer";

export const useRefetchByScroll = (onChange: any) => {
	const { ref, inView } = useInView({
		initialInView: false,
		onChange(inView) {
			if (inView) {
				onChange();
			}
		},
	});

	return { ref, inView };
};
