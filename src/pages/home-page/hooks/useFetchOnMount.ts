import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks/hooks";
import { useEffect } from "react";

export const useFetchOnMount = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const { refetch, data, isLoading, isError, isFetching } = useGetRandomCharacterQuery({
		limit: "20",
		rating: globalAgeRating,
	});

	// useEffect(() => {
	// 	if (isError) {
	// 		showConner({ text: "Failed to load", variant: "error" });
	// 		return;
	// 	}
	// 	if (!isLoading) {
	// 		showConner({ text: "Welcome", variant: "success" });
	// 	}
	// }, []);

	return { refetch, data, isLoading, isError, isFetching };
};
