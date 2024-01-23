import { HeartOff } from "lucide-react";
import { Img } from "react-image";
import { Data } from "../../hooks/useGetLikes";

interface Props {
	likes: Data[] | undefined;
}

export const RandomImagesList = ({ likes }: Props) => {
	if (likes?.length) {
		return (
			<div className="w-full rounded-sm border bg-zinc-300 p-3 dark:bg-zinc-800">
				<h2 className="mb-2 text-2xl">Random Images</h2>
				<div className="grid grid-cols-5 gap-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
					{likes?.map((elem) => (
						<div
							key={elem.id}
							className="h-60 overflow-hidden *:h-full *:w-full *:object-cover *:object-top"
						>
							<Img src={elem.data.image_url} />
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-56 w-full items-center justify-center">
			<HeartOff size={60} className="animate-pulse" />
		</div>
	);
};
