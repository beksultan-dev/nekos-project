import { Loading } from "@/common/layout/loading/loading";
import { Skeleton } from "@/common/ui/skeleton";
import { Item, Rating } from "@/store/models/randomCharactersModels";
import { Image } from "lucide-react";
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
	if (isError) showBoundary("Oops");

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div>
			{!isLoading && (
				<div className={s.container}>
					{dataImg?.map((elem) => (
						<SingleImage
							src={elem.image_url}
							loader={
								<div className="flex h-full w-full items-center justify-center space-x-4">
									<Skeleton className="h-20 w-20 rounded-sm bg-transparent">
										<Image className="h-full w-full" />
									</Skeleton>
								</div>
							}
							unloader={<h1>error</h1>}
							key={uuidv4()}
							externalSrc={elem.source}
							imageId={elem.id}
							rating={elem.rating}
						/>
					))}
					<div ref={ref as never}></div>
				</div>
			)}
		</div>
	);
});
