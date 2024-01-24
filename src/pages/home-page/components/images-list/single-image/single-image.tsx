import { Button } from "@/common/ui/button";
import { useAddLikes } from "@/pages/home-page/components/images-list/single-image/hooks/useAddLikes";
import { Rating } from "@/store/models/randomCharactersModels";
import { Expand, ExternalLink, Heart, HeartOff, Shrink } from "lucide-react";
import { Img } from "react-image";
import VisibilitySensor from "react-visibility-sensor";
import s from "./single-image.module.css";

interface Props {
	src: string;
	loader: JSX.Element;
	unloader: JSX.Element;
	externalSrc: string | null;
	imageId: number;
	rating: Rating;
}

export const SingleImage = ({
	unloader,
	loader,
	src,
	externalSrc,
	imageId,
	rating,
}: Props) => {
	const { addLike } = useAddLikes();

	const handleAddLike = () => {
		addLike({ source: externalSrc, image_url: src, imageId, rating });
	};

	const handleRedirectToSource = () => {
		window.open(externalSrc as string, "_blank");
	};

	return (
		<VisibilitySensor>
			<div className={s.main_container}>
				<div className={s.container}>
					<Img
						src={src}
						unloader={unloader}
						loader={loader}
						className={s.image}
					/>
				</div>

				<div className="mt-[3px] flex justify-center gap-x-2">
					<Button
						size={"icon"}
						onClick={handleAddLike}
						className="hover:text-red-500"
					>
						<Heart size={30} />
					</Button>
					<Button
						size={"icon"}
						onClick={() => {}}
						className="hover:text-red-500"
					>
						<Expand size={30} />
					</Button>
					<Button
						size={"icon"}
						onClick={handleRedirectToSource}
						className="hover:text-red-500"
						disabled={externalSrc ? false : true}
					>
						<ExternalLink size={30} />
					</Button>
				</div>
			</div>
		</VisibilitySensor>
	);
};
