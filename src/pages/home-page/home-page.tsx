import { Loading } from "@/common/loading";
import { useThemeCustom } from "@/hooks";
import { AgeRatingSelect } from "@/pages/home-page/components";
import { SheetModal } from "@/pages/home-page/components/sheet-modal/sheet-modal";
import { Item } from "@/store/api/types";
import { ImagesList } from "./components/images-list/images-list";
import s from "./home-page.module.css";
import { useRefetchByScroll } from "./hooks";

export const HomePage = () => {
	const { cls } = useThemeCustom("dark_theme_trigger", "light_theme_trigger");

	const { ref, inView, data, isLoading, isError } = useRefetchByScroll();

	return (
		<main>
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
				{isError && <h1>Error</h1>}

				{!isLoading ? (
					<>
						<ImagesList
							dataImg={data?.items as Item[]}
							isLoading={isLoading}
							ref={ref}
							inView={inView}
						/>
					</>
				) : (
					<Loading />
				)}
			</div>
		</main>
	);
};
