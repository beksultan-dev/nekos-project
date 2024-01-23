import { api } from "@/store/api/characters-api";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { Rating } from "@/store/models/randomCharactersModels";
import { setGlobalAgeRating } from "@/store/slices/user-preferenses/user-preferenses";
import { useCallback } from "react";

export const useSetRating = () => {
	const dispatch = useAppDispatch();
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);

	const isCurrentFilterActive = localStorage.getItem("age_rating") === globalAgeRating;
	const defaultValue = localStorage.getItem("age_rating");

	const onValueChange = useCallback(
		(value: Rating) => {
			dispatch(setGlobalAgeRating(value));
		},
		[dispatch],
	);

	const onApplyChanges = useCallback(() => {
		if (!isCurrentFilterActive) {
			localStorage.setItem("age_rating", globalAgeRating);
			dispatch(api.util.resetApiState());
		}
	}, [globalAgeRating, dispatch, isCurrentFilterActive]);

	return {
		isCurrentFilterActive,
		onValueChange,
		onApplyChanges,
		defaultValue,
		globalAgeRating,
	};
};
