import { showConner } from "@/shared/lib/showSonner";
import { useLazyGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks/hooks";
import { useCallback } from "react";
import { toast } from "sonner";

export const errorMsg = () => {
	toast.dismiss();
	showConner({ text: "Failed to load", variant: "error", duration: 10000 });
};

export const useRefetchOnError = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const [lazyFetch] = useLazyGetRandomCharacterQuery();

	const refetchOnClick = useCallback(async () => {
		await lazyFetch({ limit: "20", rating: globalAgeRating });
		console.log("render");

		toast.dismiss();
	}, [globalAgeRating]);

	return { refetchOnClick };
};
