import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks";
import { useInView } from "react-intersection-observer";

export const useRefetchByScroll = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const { refetch, data, isLoading, isError } = useGetRandomCharacterQuery({
		limit: "20",
		rating: globalAgeRating,
	});

	const { ref, inView } = useInView({
		initialInView: false,
		onChange(inView) {
			if (inView) {
				refetch();
			}
		},
	});

	return { ref, inView, data, isLoading, isError };
};
