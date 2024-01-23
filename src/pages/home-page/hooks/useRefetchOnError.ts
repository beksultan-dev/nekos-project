import { useLazyGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks/hooks";
import { useCallback } from "react";

export const useRefetchOnError = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const [lazyFetch] = useLazyGetRandomCharacterQuery();

	const refetchOnClick = () => {
		lazyFetch({ limit: "20", rating: globalAgeRating });
	};

	return { refetchOnClick };
};
