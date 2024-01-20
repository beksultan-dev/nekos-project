import { ButtonUI } from "@/common/button/button";
import { useAddLikes } from "@/pages/home-page/components/single-image/hooks/useAddLikes";
import { Rating } from "@/store/api/types";
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
		addLike(imageId, externalSrc, src, rating);
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

				<div className={s.tooltip}>
					<ButtonUI onClick={handleAddLike} className="action_button">
						<Heart />
					</ButtonUI>
					<ButtonUI onClick={() => {}} className="action_button">
						<Expand />
					</ButtonUI>
					<ButtonUI
						onClick={handleRedirectToSource}
						className="action_button"
						disabled={externalSrc ? false : true}
					>
						<ExternalLink />
					</ButtonUI>
				</div>
			</div>
		</VisibilitySensor>
	);
};
