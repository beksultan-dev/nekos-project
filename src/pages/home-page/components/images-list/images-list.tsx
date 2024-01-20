import { Skeleton } from "@/common/ui/skeleton";
import { Item } from "@/store/api/types";
import { forwardRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { SingleImage } from "../single-image/single-image";
import s from "./images-list.module.css";

interface Props {
	dataImg: Item[];
	isLoading: boolean;
	inView: boolean;
}

export const ImagesList = forwardRef(({ dataImg, isLoading, inView }: Props, ref) => {
	return (
		<div>
			{!isLoading && (
				<div className={s.container}>
					{dataImg?.map((elem) => (
						<SingleImage
							src={elem.image_url}
							loader={
								<div className="flex items-center space-x-4 justify-center h-full w-full">
									<Skeleton className="h-20 w-20 rounded-full bg-slate-800" />
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
