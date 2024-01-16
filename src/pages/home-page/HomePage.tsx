import { AgeRating } from "@/components/AgeRating";
import { Loading } from "@/components/Loading/Loading";
import { SheetUI } from "@/components/SheetModel";
import { useThemeCustom } from "@/hooks";
import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import s from "./HomePage.module.css";

export const HomePage = () => {
	const { globalAgeRating } = useAppSelector((state) => state.userPreferenses);
	const { cls } = useThemeCustom("dark_theme_trigger", "light_theme_trigger");

	const { data, isLoading, isSuccess, isFetching, refetch, status } =
		useGetRandomCharacterQuery({
			limit: "20",
			rating: globalAgeRating,
		});

	const { entry, ref, inView } = useInView({
		initialInView: false,
		onChange(inView, entry) {
			if (inView === true) {
				refetch();
			}
		},
	});

	return (
		<>
			{!isLoading && (
				<div className={s.triggerBtn}>
					<SheetUI
						className={cls}
						trigger_text="filter"
						content_title="Age rating"
					>
						<AgeRating />
					</SheetUI>
				</div>
			)}
			<div className={s.container}>
				{status === "rejected" && <h1>Error</h1>}
				{!isLoading ? (
					<>
						{data?.items.map((item) => (
							<img
								className={s.img}
								src={item.image_url}
								alt="image"
								key={uuidv4()}
							/>
						))}
						<div ref={ref}></div>
					</>
				) : (
					<Loading />
				)}
			</div>
		</>
	);
};
