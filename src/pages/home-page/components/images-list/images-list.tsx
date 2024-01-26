import { Loading } from "@/common/layout/loading/loading";
import { Skeleton } from "@/common/ui/skeleton";
import { Item, Rating } from "@/store/models/random-char-models";
import { forwardRef } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { v4 as uuidv4 } from "uuid";
import s from "./images-list.module.css";
import { SingleImage } from "./single-image/single-image";

interface Props {
	dataImg: Item[];
	isLoading: boolean;
	inView?: boolean;
	isError: boolean;
}

export const ImagesList = forwardRef(({ dataImg, isLoading, inView, isError }: Props, ref) => {
	const { showBoundary } = useErrorBoundary();

	if (isError) {
		showBoundary("Oops");
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			<div className={s.container}>
				{dataImg?.map((elem) => <SingleImage key={uuidv4()} {...elem} />)}
				<div ref={ref as never}></div>
			</div>
		</div>
	);
});
