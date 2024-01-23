import { ErrorComponent } from "@/common/layout/error/HomePageError";
import { AgeRatingSelect } from "@/pages/home-page/components";
import { SheetModal } from "@/pages/home-page/components/sheet-modal/sheet-modal";
import { Item } from "@/store/models/randomCharactersModels";
import { ErrorBoundary } from "react-error-boundary";
import s from "./HomePage.module.css";
import { ImagesList } from "./components/images-list/images-list";
import { useFetchOnMount } from "./hooks/useFetchOnMount";
import { useRefetchByScroll } from "./hooks/useRefetchByScroll";
import { useRefetchOnError } from "./hooks/useRefetchOnError";

export const HomePage = () => {
	const { refetch, isFetching, isError, data, isLoading } = useFetchOnMount();
	const { inView, ref } = useRefetchByScroll(refetch);
	const { refetchOnClick } = useRefetchOnError();

	const errorMsg = (err: Error) => {
		console.log(err);
	};

	return (
		<main>
			{!isLoading && (
				<div className={s.triggerBtn}>
					<SheetModal>
						<AgeRatingSelect />
					</SheetModal>
				</div>
			)}

			<div className={s.container}>
				<ErrorBoundary
					fallbackRender={ErrorComponent}
					onError={errorMsg}
					onReset={refetchOnClick}
				>
					<ImagesList
						dataImg={data?.items as Item[]}
						isLoading={isLoading}
						ref={ref}
						inView={inView}
						isError={isError}
					/>
				</ErrorBoundary>
			</div>
		</main>
	);
};
