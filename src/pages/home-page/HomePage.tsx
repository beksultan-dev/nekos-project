import { ErrorComponent } from "@/common/layout/error/home-page-error";
import { AgeRatingSelect } from "@/pages/home-page/components";
import { SheetModal } from "@/pages/home-page/components/sheet-modal/sheet-modal";
import { Item } from "@/store/models/random-char-models";
import { ErrorBoundary } from "react-error-boundary";
import s from "./HomePage.module.css";
import { ImagesList } from "./components/images-list/images-list";
import { useFetchOnMount } from "./hooks/useFetchOnMount";
import { useRefetchByScroll } from "./hooks/useRefetchByScroll";
import { errorMsg, useRefetchOnError } from "./hooks/useRefetchOnError";

export const HomePage = () => {
	const { refetch, isFetching, isError, data, isLoading } = useFetchOnMount();
	const { inView, ref } = useRefetchByScroll(refetch);
	const { refetchOnClick } = useRefetchOnError();

	return (
		<main>
			<SheetModal isLoading={isLoading}>
				<AgeRatingSelect />
			</SheetModal>

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
