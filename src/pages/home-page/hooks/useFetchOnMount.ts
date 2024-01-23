import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks/hooks";

export const useFetchOnMount = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const { refetch, data, isLoading, isError, isFetching } = useGetRandomCharacterQuery({
		limit: "20",
		rating: globalAgeRating,
	});

	return { refetch, data, isLoading, isError, isFetching };
};
