import { Loading } from "@/common/loading";
import { useThemeCustom } from "@/hooks";
import { AgeRatingSelect } from "@/pages/home-page/components";
import { SheetModal } from "@/pages/home-page/components/sheet-modal/ui/ui";
import { useGetRandomCharacterQuery } from "@/store/api/characters-api";
import { useAppSelector } from "@/store/hooks";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import s from "./home-page.module.css";

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
					<SheetModal
						className={cls}
						trigger_text="filter"
						content_title="Age rating"
					>
						<AgeRatingSelect />
					</SheetModal>
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
